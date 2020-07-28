# Dream See Do Dev Challenge

This is a Rails API/React front-end app.

### Getting Started

- Use [rvm](https://rvm.io/) to install Ruby version 2.5.5
- Make sure you are on Node >= 12

Then to install all dependencies and seed your local database:

```
gem install bundler:2.1.4
bundle install
yarn install
bin/rails db:migrate
bin/rails db:seed
bin/rails db:test:prepare
```

Finally, confirm that everything is working by starting up webpacker and a Rails server:

```
bin/webpack-dev-server
rails s
```

Navigate over to http://localhost:3000 in your browser and you should see the Dream See Do app.

👏 **Congrats, you're ready to build now!**


## Testing

`yarn test`

`bundle exec rspec`
