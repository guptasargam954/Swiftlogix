from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    APP_NAME: str = "Swiftlogix API"
    DATABASE_URL: str = "postgresql+asyncpg://postgres:postgres@localhost:5432/swiftlogix"
    
    # Mock API Keys
    WEATHER_API_KEY: str = "mock_weather_api_key"
    MAP_API_KEY: str = "mock_map_api_key"

    class Config:
        env_file = ".env"

settings = Settings()
