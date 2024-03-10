# Web Development Project 2 - Data Structures Flashcard App

Submitted by: **Edward Bordenave**

This web app: **Data Structures Flashcard App**

Time spent: **6-7** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The title of the card set and some information about it, such as a short description and the total number of cards are displayed**
- [x] **A single card at a time is displayed, only showing one of the components of the information pair**
- [x] **A list of card pairs is created**
- [x] **Clicking on the card shows the corresponding component of the information pair**
- [x] **Clicking the next button displays a random new card**

The following **optional** features are implemented:

- [ ] Cards contains images in addition to or in place of text
- [x] Cards have different visual styles such as color based on their category
    - [ ] *traffic light = red:hard, yellow:medium, green:easy*

The following **additional** features are implemented:

* [ ] List anything else that you added to improve the site's functionality!

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='https://imgur.com/a/d84zuuc' title='Video Walkthrough' width='' alt='Video Walkthrough' />
https://imgur.com/a/d84zuuc
<!-- Replace this with whatever GIF tool you used! -->
GIF created with ...LiceCAP
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

I faced a few challenges while developing this app. I wanted to implement the images for each data structure as a visual aid to the user. If you look at the repo, you'll see an images folder and props being passed. The issue that I came across with had to do with pathing. I could not determine how to path properly from my CardData Object to component itself.
Another issue I faced that was that I wanted to implement responsiveness. I knew about container queries and media queries but I wanted to try clamp(). Based on MDN it seemed straight forward enough. I confirmed that it would work in my browser and then tried the code. It did not appear to work. So I am hoping on the next project I will have figured it out or use an alternative like container or media query.

## License

    Copyright [yyyy] [name of copyright owner]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
