<img width="1147" alt="image" src="https://github.com/user-attachments/assets/23e8c109-0d61-4c73-a7e8-198dceec2aea">

<img width="1147" alt="image" src="https://github.com/user-attachments/assets/7a6f9be9-4f44-46b1-8e5f-e819e296656d">

<img width="1439" alt="image" src="https://github.com/user-attachments/assets/b78718b0-1e66-4d3b-9755-68920c9bd6b9">

<img width="1439" alt="image" src="https://github.com/user-attachments/assets/ef2cfaba-6934-4aa4-8383-470ed159a57c">


# Prerequisites
Make sure you have the following software installed on your machine:
- Python: Download and install the latest version from Python.org.
- pip: This is the package installer for Python, typically included with Python installation.
- Virtualenv: This helps create isolated Python environments. You can install it using pip if not - already installed:

```bash
pip install virtualenv
```
# Clone the repository
First, clone the repository to your local machine using Git. Open your terminal and run the following command:
```bash
https://github.com/sneha-at-hub/Userauthentication-SimpleJWT-RestFramework-react.git
```
## Navigate to the project directory
Change your working directory to the project's directory
```bash
cd backend
```
## Create and Activate virtual Environment
```bash
virtualenv venv
```
### Activate
**On mac/Linux**

```bash
source venv/bin/activate
```

**On Windows**
```bash
venv\Scripts\activate

```
## Install Dependencies
Install the project dependencies listed in the requirements.txt file:
```bash
pip install -r requirements.txt
```
Install Django using pip within your virtual environment:
```bash
pip install django
```
Install Django REST Framework using pip:
```bash
pip install djangorestframework
```
## Set up the Database
Run the following commands to set up the database:
```bash
python manage.py makemigrations
python manage.py migrate
```
## Create a Superuser
Create a superuser to access the Django admin interface:
```bash
python manage.py createsuperuser
```
### Run the Development Server
Start the development server:
```bash
python manage.py runserver
```
The development server will typically be available at **http://127.0.0.1:8000**.

## Troubleshooting
### Common Issues

- If you encounter an error like pip: command not found, ensure Python and pip are properly installed.
- If you see dependency errors, try deleting the venv folder and re-create the virtual environment, then re-run pip install -r requirements.txt.
  
# Useful Links:
- [Django Documentation](https://docs.djangoproject.com/en/5.0/)
- [Django REST Framework Documentation](https://www.django-rest-framework.org/)
- [Python Downloads](https://www.python.org/downloads/)
- [pip Documentation](https://pip.pypa.io/en/stable/)

