from flask import Flask, render_template, redirect, session, flash,request
from surveys import satisfaction_survey as survey 
from flask_debugtoolbar import DebugToolbarExtension


app = Flask(__name__)
app.config['SECRET_KEY'] = "natrix111"
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False

RESPONSES_KEY = 'responses'


@app.route('/')
def start_page():
  """Display the start page for the survey."""
  return render_template('start_page.html', survey=survey) 



@app.route("/begin", methods=["POST"])
def start_survey():
  """Clear the session of responses."""
  session[RESPONSES_KEY] = []
  session.modified = True  
  return redirect("/questions/0")



@app.route('/answer', methods=["POST"])
def handle_question():
  """Save response and redirect to next question."""
  choice = request.form['answer']
  responses = session.get(RESPONSES_KEY, [])  # Use .get with a default value of []
  responses.append(choice)
  session[RESPONSES_KEY] = responses
  session.modified = True  # Explicitly mark session as modified

  if len(responses) == len(survey.questions):
    return redirect("/complete")
  else:
    return redirect(f"/questions/{len(responses)}")



@app.route("/questions/<int:qid>")
def show_question(qid):
  """Shows current question."""
  responses = session.get(RESPONSES_KEY, [])  # Use .get with a default value of []

  if len(responses) == len(survey.questions):
    return redirect("/complete")
  if len(responses) != qid:
    flash(f"Invalid question id: {qid}.")
    return redirect(f"/questions/{len(responses)}")

  question = survey.questions[qid]
  return render_template("questions.html", question_num=qid, question=question)



@app.route("/complete")
def complete():
  """Survey complete. Show thank you! page."""

  return render_template("thank_you.html")


