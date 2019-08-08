# Authentication

> _Authentication_ is the process used by applications to determine and confirm identites of users. It ensures that the correct content is showed to users and, more importantly, that incorrect content is secured and unavailable to unauthorized users.

This artile discusses different types of authentication.

## Password Authentication

That's the most common type. A users is asked to enter his username (or email) and password. The application's server then checks the supplied credentials to determine whether the user exists and whether the supplied password is correct.

Typically, after a successful login, the application will respond with an _authentication token_ for the client to use in additional HTTP requests. This token is stored on the user's computer preventing the need to continuously log in.

This token generally expires after a certain amount of time.

## API Keys

Sometimes the user of an application is another application. Many apps expose interfaces to their information in forms of API. This allows applications to fetch data from app without the need to parse and manipulate its web page.

To limit access to the API providers limit access in different ways. The most common way is by using _API Keys_. Application provides an authorized users with an option to generate API keys. Those keys are then sent to application's API through requests. API provide ruses it to verify that the sender has access and to provide sender with a proper response based on it's access level.

## OAuth

For some cases API keys are not sufficient. If an application contains private information, providing it to another application via API key can be undesirable.

The most elegant approach to this problem is oAuth, developed by lead Twitter developer Blaine Cook.

Each API implements its own version of oAuth based on the open standard. So, while differenct APIs can implement oAuth differently, they usually have a common flow.

## Generic oAuth Flow

1. Determine which service they want to use for credentials
2. Get redirected to that service to login
3. Confirm access and set the list of permissions
4. Get redirected back along with _access token_, that is saved by the original application

## OAuth 2

_OAuth 2_ is a new version of specification, that allows different authenticatin flows depending on the specific application requesting acess and the level of access being requested.

Below are some common OAuth 2 flows and how they're used

## Client Credentials Grant

Sometimes an applications doesn't need to access user data...
