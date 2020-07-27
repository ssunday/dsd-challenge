# frozen_string_literal: true

ENV['RAILS_ENV'] ||= 'test'

require 'spec_helper'
require File.expand_path("../config/environment", __dir__)

# Fix bug with spring and simplecov
# https://github.com/colszowka/simplecov/issues/381#issuecomment-347651728
# Rails.application.eager_load!
Rails.application.eager_load!

require 'rspec/rails'

# Add additional requires below this line. Rails is not loaded until this point!

# Requires supporting ruby files with custom matchers and macros, etc, in
# spec/support/ and its subdirectories. Files matching `spec/**/*_spec.rb` are
# run as spec files by default. This means that files in spec/support that end
# in _spec.rb will both be required and run as specs, causing the specs to be
# run twice. It is recommended that you do not name files matching this glob to
# end with _spec.rb. You can configure this pattern with the --pattern
# option on the command line or in ~/.rspec, .rspec or `.rspec-local`.
#
# The following line is provided for convenience purposes. It has the downside
# of increasing the boot-up time by auto-requiring all files in the support
# directory. Alternatively, in the individual `*_spec.rb` files, manually
# require only the support files necessary.
Dir[Rails.root.join("spec/support/**/*.rb")].each { |f| require f }

RSpec.configure do |config|
  # Include devise helper methods
  # Unfortunately they don't work on request specs in our version of Devise
  config.include FactoryBot::Syntax::Methods

  # If true, the base class of anonymous controllers will be inferred
  # automatically. This will be the default behavior in future versions of
  # rspec-rails.
  config.infer_base_class_for_anonymous_controllers = false

  config.example_status_persistence_file_path = "tmp/rspec_failures.txt"

  config.infer_spec_type_from_file_location!

  # Run specs in random order to surface order dependencies. If you find an
  # order dependency and want to debug it, you can fix the order by providing
  # the seed, which is printed after each run.
  #     --seed 1234
  config.order = "random"

  config.before(:suite) do
    # Ensure all time parsing from strings are done in a time zone
    Time.zone = "Pacific Time (US & Canada)"
  end

  config.after(:suite) do
    # Clean carrierwave file uploads
    FileUtils.rm_rf(Dir["#{Rails.root}/spec/tmp/uploads/*"])
  end

  config.before(:each) do
    ActionMailer::Base.deliveries.clear
  end
end

Shoulda::Matchers.configure do |config|
  config.integrate do |with|
    with.test_framework :rspec
    with.library :rails
  end
end

# Run jobs in tests
ActiveJob::Base.queue_adapter = :test
