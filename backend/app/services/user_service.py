from sqlalchemy.orm import Session

from app.models.user import User
from app.schemas.user import UserRegister
from app.core.security import hash_password


def get_user_by_email(
    db: Session,
    email: str
):
    return (
        db.query(User)
        .filter(User.email == email)
        .first()
    )


def create_user(
    db: Session,
    user_data: UserRegister
):
    user = User(
        full_name=user_data.full_name,
        email=user_data.email,
        hashed_password=hash_password(
            user_data.password
        ),
        provider="local"
    )

    db.add(user)
    db.commit()
    db.refresh(user)

    return user