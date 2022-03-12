require 'datadog_api_client'

api_instance = DatadogAPIClient::V1::IPRangesAPI.new

begin
  result = api_instance.get_ip_ranges
  p result
rescue DatadogAPIClient::V1::APIError => e
  puts "Error when calling IPRangesAPI->get_ip_ranges: #{e}"
end

DatadogAPIClient::V1.configure do |config|
    config.api_key = ENV['8bd9d785b5fe5cae4d887735a25e4430']
    config.application_key = ENV['3a7c7f04556c056e133b12e973018796e130e4f3']
  end
  