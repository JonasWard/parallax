
## Importing Necessary Modules
import json
import requests # to get image from the web
import shutil # to save it locally

rep_path = '/Users/jonas/Documents/reps/parallax/src/'
global_name = 'buddhist_funeral'

def read_write_image_url(url, file_path):
    # reading the image from the web
    response = requests.get(url, stream=True)
    # Check if the image was retrieved successfully
    if response.status_code == 200:
    # Set decode_content value to True, otherwise the downloaded image file's size will be zero.
        response.raw.decode_content = True
    
    # Open a local file with wb ( write binary ) permission.
        with open(file_path,'wb') as f:
            shutil.copyfileobj(response.raw, f)

        print(i, "downloaded")

    else:
        print(i, " - Error - ", response.status_code)
    

    # closing the connection
    del response

# reading a specific json file
with open(rep_path+'output/'+global_name + '.json') as json_file:
    data = json.load(json_file)

    for entry in data["images_results"]:
        try:
            if ("original" in entry):
                main_url = entry["original"]
            else:
                main_url = entry["link"]

            extension = main_url.split('.')[-1].split('?')[0].split('&')[0]
            file_name = global_name + '_' + str(entry["position"]) + '.' + extension
            read_write_image_url(main_url, rep_path+'found/'+file_name)
        except:
            print("global fuck up for {}".format(entry["position"]))
