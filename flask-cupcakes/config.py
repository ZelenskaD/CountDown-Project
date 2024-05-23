class Config:
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SECRET_KEY = "1234"


class DevelopmentConfig(Config):
    SQLALCHEMY_DATABASE_URI = 'postgresql:///cupcakes'
    DEBUG_TB_INTERCEPT_REDIRECTS = False


class TestingConfig(Config):
    SQLALCHEMY_DATABASE_URI = 'sqlite:///:memory:'
    TESTING = True
    DEBUG_TB_INTERCEPT_REDIRECTS = False
