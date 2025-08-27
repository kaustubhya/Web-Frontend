import json

myFile = 'videos.txt'

def load_data():
    try:
        with open(myFile, 'r') as file:
            return json.load(file)
        # this will load the file data and convert it to json format
    except FileNotFoundError:
        return []
    
def save_file_data(videos):
    with open(myFile, 'w') as file:
        # json.dump(what to dump, where to dump)
        json.dump(videos, file)
        # we did not use try catch as here we need not return an empty array


def list_all_videos(videos):
    # now our file data is a long string of videos, with no indexes, to get the indexes, we need to use enumerate
    for index, video in enumerate(videos, start=1):
        # as enumerate starts from 0, we made it specifically start from 1
        print(f"{index}. video: {video["name"]}, duration: {video['duration']} \n");



def add_new_video(videos):
    
    video_name = input("Enter the video name: ")
    video_time = input("Enter the video length: ")
    videos.append({"name" : video_name, "duration": video_time})
    save_file_data(videos)

def update_video(videos):
    list_all_videos(videos)
    video_index = int(input("Enter the video index you want to update: "))
    if 1 <= video_index <= len(videos):
        video_new_name = input("Enter the new video name: ")
        video_new_duration = input("Enter the new video duration: ")
        videos[video_index - 1] = {"name": video_new_name, "duration": video_new_duration}
        # we did videos[video_index - 1] because the index starts from 0, but the user input starts from 1
        save_file_data(videos)

    else:
        print("Invalid video index. Please try again.")    

def delete_video(videos):
    list_all_videos(videos)
    video_index = int(input("Enter the video index you want to delete: "))
    if 1 <= video_index <= len(videos):
        del videos[video_index - 1]
        save_file_data(videos)
    else:
        print("Invalid video index. Please try again.")

# Main application logic for the YouTube Manager App
def main():

    videos = load_data()  # This will hold the list of videos

    while True:
        print("\n Youtube Manager App | Choose an option: ");
        print("1. List all videos");
        print("2. Add a new video");
        print("3. Update a video");
        print("4. Delete a video");
        print("5. Exit");

        # print(videos);

        choice = int(input("Enter your choice: "));


        match choice:
            case 1: 
                print("******************************************************")
                list_all_videos(videos);
                print("******************************************************")

            case 2: 
                add_new_video(videos);
            case 3: 
                update_video(videos);
            case 4: 
                delete_video(videos);
            case 5: 
                break
            case _:
                print("Invalid choice. Please try again.");
                # This '_' case covers all the other cases not explicitly handled above.
                # It is just like a default case in a switch statement.

if __name__ == "__main__":
    main();
                