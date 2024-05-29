from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField
from wtforms.validators import DataRequired


class LoginForm(FlaskForm):
    username = StringField('Contact in the Ether', validators=[DataRequired()], render_kw={"placeholder": "Enter your secret communication channel"})
    password = PasswordField('Secret Cipher', validators=[DataRequired()], render_kw={"placeholder": "Enter your encrypted key"})
    submit = SubmitField('Join the Shadows')