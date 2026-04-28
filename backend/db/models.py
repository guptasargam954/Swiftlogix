from sqlalchemy import Column, String, Integer, Float, Boolean
from sqlalchemy.orm import declarative_base

Base = declarative_base()

class Shipment(Base):
    __tablename__ = "shipments"

    id = Column(Integer, primary_key=True, index=True)
    origin = Column(String)
    destination = Column(String)
    weight = Column(Float, default=0.0)
    hazardous = Column(Boolean, default=False)
    status = Column(String, default="Pending")
    best_mode = Column(String, nullable=True)
    estimated_cost = Column(Float, nullable=True)
