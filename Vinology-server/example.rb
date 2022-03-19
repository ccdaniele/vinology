require 'datadog_api_client'

api_instance = DatadogAPIClient::V1::IPRangesAPI.new

begin
  result = api_instance.get_ip_ranges
  p result
rescue DatadogAPIClient::V1::APIError => e
  puts "Error when calling IPRangesAPI->get_ip_ranges: #{e}"
end

DatadogAPIClient::V1.configure do |config|
    config.api_key = ENV[DD_API_KEY]
    config.application_key = ENV[DD_APP_KEY]
  end
  