from fastapi import FastAPI
from sqlalchemy import text
from app.db.database import engine
from app.core.config import settings
from app.api.auth import router as auth_router
from app.middleware import setup_cors

app = FastAPI(
    title=settings.APP_NAME,
    version="1.0.0",
)
setup_cors(app)

app.include_router(auth_router)

@app.get("/")
def root():
    return {
        "message": "WishBloom API Running"
    }


@app.get("/health")
def health_check():
    return {
        "status": "healthy"
    }

@app.get("/config-test")
def config_test():
    return {
        "app_name":settings.APP_NAME
    }
    
@app.get("/db-dest")
def db_test():
    with engine.connect() as conn:
        conn.execute(text("SELECT 1"))
    
    return {
        "database":"Connected"
    }