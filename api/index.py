import os
import sys

# Add the project root to the path so we can import 'backend'
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from backend.main import app

# For Vercel, the entry point should be 'app'
# This is already handled by the import above
