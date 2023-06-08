# **Learn Hiragana & Katakana**
## **Site Overview**
According to the [**U.S. Department of State's *Foreign Language Institute***](https://www.state.gov/foreign-language-training/), the Japanese language is one of five languages considered exceptionally difficult for native English speakers - taking, on average, around 2,200 hours (the equivalent of 6 years if a person were to practise for 1 hour every day) to achieve proficiency. This is, in no small part, due to Japan's use of three separate alphabets. While the largest and most complex alphabet used in Japan, named *kanji*, is made up of characters that are Chinese in origin, the remaining 2, named *hiragana* and *katakana* are unique to Japan and form the basis for all Japanese words. Japanese children are taught to read and write hiragana and katakana from a young age, and knowledge of both is a necessary prerequisite to being introduced to kanji steadily across 9 years of mandatory education.

In a similar way, it is necessary for anyone learning Japanese to recognise both the hiragana and katakana alphabets, as - technically speaking - the entire language could be written in just one or both of them (although, practically speaking, this would be a terrible idea!)

With Japanese being such a difficult language to learn for native English speakers, practise may never equal *perfect*, but practise WILL make *progress*, and gamifying that practise makes learning all the more fun.

Am I Responsive? displays of each page:

Homepage:

![Am I responsive display - homepage](docs/images/amiresponsive-homepage.png)

Hiragana page:

![Am I responsive display - hiragana](docs/images/amiresponsive-hiragana.png)

Katakana page:

![Am I responsive display - katakana](docs/images/amiresponsive-katakana.png)

## **Table of Contents:**
1. [**Site Overview**](#site-overview)
1. [**Planning stage**](#planning-stage)
    * [***Target Audiences***](#target-audiences)
    * [***User Stories***](#user-stories)
    * [***Site Aims***](#site-aims)
    * [***Colour Scheme***](#colour-scheme)
    * [***Typography***](#typography)
1. [**Current Website Features**](#current-website-features)
    * [***Features Present on All Pages***](#features-present-on-all-pages)
        * [*Favicon*](#favicon)
        * [*Header*](#header)
        * [*Footer*](#footer)
    * [***Homepage***](#homepage)
        * [*Choice of Game*](#choice-of-game)
        * [*Select Game*](#select-game)
    * [***Hiragana and Katakana Game Pages***](#hiragana-and-katakana-game-pages)
        * [*Game Area*](#game-area)
        * [*Current Score*](#current-score)
        * [*Back to Homepage*](#back-to-homepage)
    * [***JavaScript on Game Pages***](#javascript-on-game-pages)
        * [*Main Game Functions*](#main-game-functions)
        * [*Unique Score Message*](#unique-score-message)
1. [**Testing**](#testing)
1. [**Technologies Used**](#technologies-used)
1. [**Deployment**](#deployment)
1. [**Future-Enhancements**](#future-enhancements)
1. [**Credits**](#credits)
    * [**Honourable Mentions**](#honourable-mentions)
    * [**Code References**](#code-references)
    * [**Content**](#content)
    * [**Media**](#media)
    
## **Planning stage**
### **Target Audiences**

* People of all age groups who are learning Japanese at beginner - intermediate level who would like to use a fun game as a resource to develop and/or test their knowledge of the hiragana and katakana alphabets.

### **User Stories**

* As a user, I want to see the subject matter of the page.
* As a user, I want to navigate the page to find what I require quickly and easily.
* As a user, I want to test my knowledge of hiragana and katakana in a visually engaging way
* As a user, I want to be able to clearly choose which game to play
* As a user, I want feedback for my correct and incorrect answers, and a score that updates in real time

### **Site Aims**

* To provide an interactive experience for people of all age groups who are learning Japanese at beginner-intermediate level.
* To give users a clear choice between a hiragana game and katakana game, and provide a streamlined experience that reacts to their input and gives them feedback in real time.
* To provide users with a unique message when they have answered 10 questions, depending on their score.
* To give users the clear choice to play the game again as many times as they like, or choose to play the other game if they wish.

## **Current Website Features**

### **Colour Scheme**

This website's colour scheme was inspired by the following colour palette created by [**akula creative**](https://akulakreative.com/blog/2016/02/a-sea-and-space-inspired-color-palette) based on an image posted by NASA.

![akula creative colour palette](docs/images/sea-space-color-palette-navy-blue-aqua-yellow.jpg)

Japan is an island nation, so I wanted to include colours that the user can associate with the ocean, and serenity. The inclusion of the gold colour was something I intended on from the start, as it is inspired by the Japanese practice of [**Kintsugi (金継ぎ, "golden joinery")**](https://en.wikipedia.org/wiki/Kintsugi).

Below are two colour grids to show how the colours interact with each other from an accessibility perspective - one with just the main site colours, and the other with the additional colours used in the "correct" and "incorrect" classes when taking the quiz itself.

![colourgrid - main colours](docs/images/colourgrid-new.png)

![colourgrid - with additional colours](docs/images/colour-grid-with-js-classes.png)

### **Typography**

Three fonts were used across this website - two of them for the English text, and one of them for the Japanese text.

For all instances of "Learn Hiragana and Katakana", "Hiragana Test!" and "Katakana Test!", the font "Righteous" was used. This font was chosen for its fun, bold style, that doesn't compromise readibaility. It gives them impression of a logo, which was perfect for this simple website. "Rubik" was used for all other English text on the website due to its clear readability, with slightly rounded styles that again give a fun feel to the website.

Originally, for the Japanese text, a font called "BIZ UDMincho" was used. Initially, this font was chosen because it resembled traditional Japanese calligraphy whilst also remaining fairly clear. However, as displayed in the below screenshot, it did make some of the characters much less legible (particularly the hiragana), and didn't align with the goal of having an easily accessible game for beginners.

![game choice with BIZ UDMincho Japanese font](docs/screenshots/game-choice-old.png)

Instead, "Noto Sans Japanese" was used as it's much clearer, and fits much better with the overall feel of the website. A clear comparison between the two fonts can be seen in the 'a' symbols in each alphabet:

!['a' hiragana in BIZ UDMincho Japanese font](docs/screenshots/hiragana-question-a-old.png)
!['a' hiragana in Noto Sans Japanese Japanese font](docs/screenshots/hiragana-question-a.png)
!['a' katakana in BIZ UDMincho Japanese font](docs/screenshots/katakana-question-a-old.png)
!['a' katakana in Noto Sans Japanese Japanese font](docs/screenshots/katakana-question-a.png)

All fonts were sourced from Google Fonts, as mentioned in the Credits.

### **Features Present on All Pages**

#### **Favicon**

The Favicon chosen for this website is the [**"crossed flags" emoji favicon**](https://favicon.io/emoji-favicons/crossed-flags/) from favicon.io - as mentioned in the Credits.

The "crossed flags" emoji depicts two Japanese flags crossing one another, and is often used in relation to celebrating Japanese culture [(**source**)](https://yaytext.com/emoji/crossed-flags/#:~:text=The%20crossed%20flags%20emoji%20shows,support%20the%20Japanese%20people%20%F0%9F%8E%8C).

![crossed flags favicon image](docs/images/favicon-image.png)

Favicon in Chrome browser tab:

![favicon in Chrome browser tab](docs/screenshots/favicon-in-tab.png)

#### **Header**

The header can be found at the top of all three pages of the website, and is very simple in its design. It includes the site title in a centred position, using the font I chose for the logo-style text. No additional styling was added in CSS (such as hover styling), to give the impression that the text is an image logo.The header is responsive, but care was taken to make sure that it never takes up too much of the screen, so that the main page content is what sticks out the most to the user. Due to the more simplistic style of this website, the header does not include a navigation bar, but clicking on the site title will take you to the homepage, as the user would expect. The decision not to include a navigation bar was made due to there being a "Back to Game Menu" button below the game area on each page that is clear and intuitive, and allowed the option of including the Japanese text.

![screenshot of header](docs/screenshots/header.png)

#### **Footer**

The footer also appears on all three pages of the website and contains a small amount of text explaining the purpose of the website. Initially, this was all, but the decision was made to also include a disclaimer stating that the website is for education purposes only.

Without disclaimer:

![screenshot of footer text without disclaimer](docs/screenshots/footer-1.png)

With disclaimer:

![screenshot of footer text with disclaimer](docs/screenshots/footer-2.png)

### **Homepage**

The homepage is fully responsive, and serves as the central hub through which the user can navigate to their chosen game.

The homepage on desktop:

![screenshot of homepage on desktop](docs/screenshots/homepage-full-desktop.png)

The homepage on mobile:

![screenshot of homepage on mobile](docs/screenshots/homepage-full-mobile.png)

#### **Choice of Game**

The main section of the website contains the two game choices - hiragana and katakana. Originally, these sections were to be called "Learn Hiragana/Katakana!", however the decision was made to change the wording to "Hiragana/Katakana Test!" due to the Japanese equivalent being much simpler, as the Japanese word for "test" is テスト - literally "te-su-to", a loan word from English.

The colours for the game sections are inverted, to make them visually distinct from one another whilst also remaining eye-catching and fitting with the overall colour scheme.

![choice of game](docs/screenshots/game-choice.png) 

#### **Select Game**

The "button" to select each game is a styled anchor tag, to give the user the illusion of a button. When clicked, they direct the user to the respective html page that holds the content for the game. To make the page more interactive, an animation has been added to each of the "buttons" that give the impression of it jumping when hovered over. A shadow was added to emphasise this animation.

Originally, these "buttons" displayed the following text:

![old hiragana-go button](docs/screenshots/hiragana-go-old.png)

![old katakana-go button](docs/screenshots/katakana-go-old.png)

However, the first character used here is the Japanese kanji for "go". As this site is aimed at beginners-intermediates wanting to practise hiragana and katakana only, it seemed unreasonable to include a kanji character as it is, due to the kanji alphabet being more advanced than the scope of this website. In many instances of Japanese media, such as some newspapers, comics, and textbooks for school children, a type of phonetic notation is used to accompany kanji characters called *furigana*. Thankfully, W3C supports the use of furigana through [**ruby markup**](https://www.w3.org/International/articles/ruby/markup.en), and so the furigana for this kanji was added for increased readibility and accessibility for all levels of reading comprehension.

![hiragana-go button with furigana](docs/screenshots/hiragana-go-furigana.png)

![katakana-go button with furigana](docs/screenshots/katakana-go-furigana.png)

### **Hiragana and Katakana Game Pages**

As with the homepage, both game pages are fully responsive based on the device used to view them on. They are where the respective games run.

Hiragana game page on desktop:

![hiragana game page on desktop](docs/screenshots/hiragana-full-desktop.png)

Hiragana game page on mobile:

![hiragana game page on mobile](docs/screenshots/hiragana-full-mobile.png)

Katakana game page on desktop:

![katakana game page on desktop](docs/screenshots/katakana-full-desktop.png)

Katakana game page on mobile:

![katakana game page on mobile](docs/screenshots/katakana-full-mobile.png)

#### **Game Area**

The game area on each page contains four main sections: an h2 heading, a question area, an answer area containing four potential answers, and a current score / 10 section at the bottom.

Hiragana game area:

![hiragana game area](docs/screenshots/hiragana-game-area.png)

Katakana game area:

![katakana game area](docs/screenshots/katakana-game-area.png)

#### **Back to Homepage**

![back to homepage / "game menu" button](docs/screenshots/back-to-homepage.png)

### **JavaScript on Game Pages**

#### **Main Game Functions**

Correct answer - hiragana 'ne':

![hiragana correct answer - 'ne'](docs/screenshots/hiragana-answer-correct.png)

Incorrect answer - hiragana 'su':

![hiragana incorrect answer - 'su'](docs/screenshots/hiragana-answer-incorrect.png)

Correct answer - katakana 'ne':

![katakana correct answer - 'ne'](docs/screenshots/katakana-answer-correct.png)

Incorrect answer - katakana 'su':

![katakana incorrect answer - 'su'](docs/screenshots/katakana-answer-incorrect.png)

Hiragana current score area updating:

![hiragana current score area](docs/screenshots/hiragana-current-score.png)

Katakana current score area updating:

![katakana current score area](docs/screenshots/katakana-current-score.png)

#### **Unique Score Message**

*
*
*
*

## **Testing**

A separate file has been created for information about testing. Please click the following link to access it: [**TESTING.md**](TESTING.md)

## **Technologies Used**

The technologies used in the making of this website are:

* HTML5
* CSS3
* JavaScript

## **Deployment**

This website was deployed on GitHub Pages. The following procedure was followed on desktop to achieve this:

* Starting at [**this project's repository**](https://github.com/emmacadavra/learn-hiragana/tree/main), navigate to the **'Settings'** tab
* In **'Settings'**, select **'Pages'** from the navigation menu on the left-hand side of the screen
* In **'GitHub Pages'**, find **'Source'** under **'Build and deployment'**
* Select the **'Main'** branch from the drop down menu and click **'Save'**
* A message is then displayed to indicate a successful deployment to GitHub pages, and provides a live link once it has finished fully deploying
The live link to the fully deployed website can be found here: [***https://emmacadavra.github.io/learn-hiragana/***](https://emmacadavra.github.io/learn-hiragana/)

## **Future-Enhancements**

*
*
*
*

## **Credits**

### **Honourable Mentions**

*
*
*
*

### **Code References**

*
*
*
*

### **Content**

*
*
*
*

### **Media**

*
*
*
*