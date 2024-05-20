from flask_wtf import FlaskForm
from wtforms import StringField, FloatField, BooleanField, IntegerField, RadioField, SelectField


class AddSnackForm(FlaskForm):

    name = StringField("Snack Name")
    price = IntegerField("How many?")
    is_healthy = BooleanField("This is a healthy snack")

    category = SelectField("Category", choices=[('ic', 'Ice C,ream'), ('chips', 'Potato Chips'), ('candy', 'Candy')])
    # category = RadioField("Category", choices=[('ic', 'Ice C,ream'), ('chips', 'Potato Chips'), ('candy', 'Candy/Sweets')] )


class NewEmployeeForm(FlaskForm):

    name = StringField("Employee Name")
    state = StringField("State")
    dept_code = StringField("Department Code")
