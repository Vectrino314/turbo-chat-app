
<p align="center">
  <img src="app/assets/images/favicon.svg" width="100" height="100" alt="Your Logo">
</p>

<h1 align="center">Fireside Chats - Responsive Turbo Chat App</h1>

[![Ruby](https://img.shields.io/badge/Ruby-3.2.2-red.svg)](https://www.ruby-lang.org/en/)
[![Rails](https://img.shields.io/badge/Rails-7.1.2-blue.svg)](https://rubyonrails.org/)
[![Turbo](https://img.shields.io/badge/Turbo-green.svg)](https://turbo.hotwired.dev/)
[![Stimulus](https://img.shields.io/badge/Stimulus-yellow.svg)](https://stimulus.hotwired.dev/)

[![License](https://img.shields.io/badge/License-MIT-brightgreen.svg)](LICENSE.md)

## Demo

Check out the [Live Demo](https://turbo-chat-app-51765420d263.herokuapp.com/users/sign_in).

## Features 🚀

### 1. Devise Authentication 🔐

Secure your app with Devise authentication. Users can sign up, log in, and enjoy a personalized experience with a secure authentication system.

### 2. Real-time Room Updates with Turbo Streams and Frames 🔄

Create and edit rooms in real-time using Turbo Streams and Frames. Changes made to rooms are instantly reflected for all users, providing a seamless and dynamic user experience.

### 3. Real-time User Addition to Rooms with Turbo Streams 🤝

Add users to rooms in real-time using Turbo Streams. As new users join, everyone in the room is immediately updated, fostering collaboration and connectivity.

### 4. Real-time Chat with Turbo Streams 📬

Engage in real-time conversations within rooms using Turbo Streams. Messages are instantly delivered to all participants, creating a responsive and interactive chat experience.

### 5. Real-time Editing and Deletion of Chats with Turbo Streams 🗑️✏️

Edit and delete messages in real-time using Turbo Streams. Users can make changes to their messages, and the updates are reflected for everyone in the room without the need for page reloads.

### 6. Responsive Design 📱

Ensure a seamless user experience across various devices with a responsive design. Your app is crafted to adapt and provide an optimal display on desktops, tablets, and smartphones.

### 7. Tailwind CSS Styling 🎨

Enhance the visual appeal of your app with Tailwind CSS styling. Enjoy a customizable and utility-first approach to styling, making it easy to create a beautiful and consistent user interface.

### 8. Stimulus JavaScript Framework 🚀

Leverage the power of Stimulus for enhancing interactivity. With Stimulus controllers, your app can achieve dynamic and reactive behavior without compromising on simplicity.

### 9. Deployed on Heroku with Heroku Postgres and Heroku Redis ☁️

Ensure scalability and reliability by deploying your app on Heroku. Utilize Heroku Postgres for a robust database solution and Heroku Redis for handling real-time updates efficiently.


## TODO
- Use Turbo iOS to make demo app
- Use Turbo Android to make demo app
- Add Avatars
- Fix scroll on create message for realtime updates
- Add attachments to messages (images, videos, files, and audio)
- Redo responsive navigation to minimize instances in user_rooms


## Local Installation

Ensure you have Ruby 3.2.2 and Rails 7.1.2 installed.

```bash
# Clone the repository
git clone https://github.com/your-username/your-app.git

# Navigate to the project directory
cd your-app

# Install dependencies
bundle install

# Set up the database
rails db:create db:migrate

# Start the server
rails server
```

<details>
    <summary>Deploy to Heroku 🚀</summary>

## Deploy to Heroku 🚀

You can deploy this Rails 7 Turbo and Stimulus app to Heroku in just a few steps.

### Prerequisites

- Make sure you have a [Heroku account](https://signup.heroku.com/) and the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) installed.

### Deployment Steps

1. **Create a new Heroku App:**

   ```bash
   heroku create your-app-name
    ```
   
2. **Configure Database and Redis:**

   Add Heroku Postgres and Heroku Redis addons to your app:

   ```bash
   heroku addons:create heroku-postgresql
   heroku addons:create heroku-redis
   ```
    
    Ensure your config/database.yml and config/cable.yml files are configured to use the Heroku Postgres and Heroku Redis addons.

3. **Deploy to Heroku:**

   ```bash
    git push heroku main
    ```

4. **Run Migrations:**

   ```bash
   heroku run rake db:migrate
   ```

5. **Open Your App:**

   ```bash
    heroku open
    ```

Your Rails 7 Turbo and Stimulus app should now be deployed to Heroku. Make sure to replace your-app-name with a unique name for your Heroku app.

### Notes

- If you're using any other addons or services, make sure to configure them on Heroku.
- Ensure your config/master.key is not included in version control to keep your credentials secure.

</details>

## Contributing/Acknowledgements
[Complete Ruby on Rails Course](https://www.udemy.com/course/the-complete-ruby-on-rails-developer-course/?kw=the+complete+ruby&src=sac)

[Hotwire and Turbo Course](https://www.udemy.com/course/ruby-on-rails-7-y-hotwire-2023/)
