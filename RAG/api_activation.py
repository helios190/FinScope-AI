import os
from dotenv import load_dotenv

class openai_activate :
    def activation() : 
        load_dotenv()
        openai_api_key = os.getenv('OPENAI_API_KEY')
        return openai_api_key