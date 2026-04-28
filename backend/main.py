from fastapi import FastAPI
from backend.api.routes import router as api_router
from fastapi.middleware.cors import CORSMiddleware
from backend.db.session import engine
from backend.db.models import Base

app = FastAPI(
    title="Swiftlogix Backend API",
    description="Backend services and engines for logistics and shipment management",
    version="1.0.0",
)

@app.on_event("startup")
async def startup_event():
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)

# Configure CORS for frontend access
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins, configure appropriately for production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include the main API router
app.include_router(api_router, prefix="/api")

@app.get("/")
def read_root():
    return {"message": "Welcome to Swiftlogix Backend API"}
