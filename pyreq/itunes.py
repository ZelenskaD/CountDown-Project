import requests

# term = "Madonna"
#
# res = requests.get('https://itunes.apple.com/search', params ={'term': term, 'limit': '25'})
#
# data = res.json()
# for result in data['results']:
#     print(result['trackName'])
#     print(result['collectionName'])

# data = {
#     "username": "chickens",
#     'tweets':
#         ['hello!', 'goodbye!', 'bock bock!', {
#             'id': 1, 'text': 'my first tweet!'}
#         ]
# }
#
# requests.post('https://en27bnye2btkl.x.pipedream.net', json=data)

key = 'kjshkxfkahfkaoflafjalfs'

response = requests.get('https://www.mapquestapi.com/geocoding/v1/address', params={'key': key, 'location': '123 Main St.'})

