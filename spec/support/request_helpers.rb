# frozen_string_literal: true

module RequestHelpers
  def json
    JSON.parse(response.body)
  end

  def json_ids
    json.map do |data|
      data['id']
    end
  end
end
