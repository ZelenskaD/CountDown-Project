# Put your app in here.
from flask import Flask, request
from operations import add, sub, mult, div

app = Flask(__name__)



@app.route('/add')
def add():
  a = request.args.get('a', type=int)
  b = request.args.get('b', type=int)
  result = a + b
  return f"<h1> {a} and {b} equal {result}"

@app.route('/sub')
def sub():
  a = request.args.get('a', type=int)
  b = request.args.get('b', type=int)
  result = a - b
  return f"<h1> Substract {b} from {a} equal {result}"

@app.route('/mult')
def mult():
  a = request.args.get('a', type=int)
  b = request.args.get('b', type=int)
  result = a * b
  return f"<h1> Multiply {a} and {b} equal {result}"


@app.route('/div')
def div():
  a = request.args.get('a', type=int)
  b = request.args.get('b', type=int)
  if b == 0:
    return "<h1>Error: Division by zero is not allowed.</h1>", 400 
  result = a/b
  if result.is_integer():
    result = int(result) 
  return f"<h1> Divide {a} by {b} equal {result}"



# operators = {
#   "add": add,
#   "sub": sub,
#   "mult": mult,
#   "div": div,
# }

# @app.route("/math/<oper>")
# def do_math(oper):
#   """Do math on a and b."""

#   a = request.args.get('a', type=int)
#   b = request.args.get('b', type=int)
#   result = operators[oper](a, b)

#   return f"<h1>The result is: {result}</h1>"
  
 

