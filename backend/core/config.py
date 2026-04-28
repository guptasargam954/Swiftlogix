import os
from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    APP_NAME: str = "Swiftlogix API"
    
    # In Vercel, the filesystem is read-only except for /tmp
    # We detect Vercel environment to adjust the SQLite path
    DATABASE_URL: str = "sqlite+aiosqlite:////tmp/swiftlogix.db" if os.environ.get("VERCEL") else "sqlite+aiosqlite:///./swiftlogix.db"
    
    # Mock API Keys
    WEATHER_API_KEY: str = "mock_weather_api_key"
    MAP_API_KEY: str = "mock_map_api_key"

    class Config:
        env_file = ".env"

settings = Settings()
