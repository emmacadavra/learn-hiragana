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
        * [*Game Question*](#game-question)
        * [*Game Answers*](#game-answers)
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

*
*
*
*

### **Colour Scheme**

This website’s colour scheme was inspired by the following colour palette created by [**akula creative**](https://akulakreative.com/blog/2016/02/a-sea-and-space-inspired-color-palette) based on an image posted by NASA.

![akula creative colour palette](docs/images/sea-space-color-palette-navy-blue-aqua-yellow.jpg)

Japan is an island nation, so I wanted to include colours that the user can associate with the ocean, and serenity. The inclusion of the gold colour was something I intended on from the start, as it is inspired by the Japanese practice of [**Kintsugi (金継ぎ, "golden joinery")**](https://en.wikipedia.org/wiki/Kintsugi).

Below are two colour grids to show how the colours interact with each other from an accessibility perspective - one with just the main site colours, and the other with the additional colours used in the "correct" and "incorrect" classes when taking the quiz itself.

![colourgrid - main colours](docs/images/colourgrid-new.png)

![colourgrid - with additional colours](docs/images/colour-grid-with-js-classes.png)


### **Typography**

*
*
*
*

## **Current Website Features**
### **Features Present on All Pages**

#### **Favicon**

*
*
*
*

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

![screenshot of homepage on desktop](docs/screenshots/full-homepage-2.png)

#### **Choice of Game**

The main section of the website contains the two game choices - hiragana and katakana. Originally, these sections were to be called "Learn Hiragana/Katakana!", however the decision was made to change the wording to "Hiragana/Katakana Test!" due to the Japanese equivalent being much simpler, as the Japanese word for "test" is テスト - literally "te-su-to", a loan word from English.

The colours for the game sections are inverted, to make them visually distinct from one another whilst also remaining eye-catching and fitting with the overall colour scheme.

![choice of game](docs/screenshots/game-choice.png) 

#### **Select Game**

The "button" to select each game is a styled anchor tag, to give the user the illusion of a button. When clicked, they direct the user to the respective html page that holds the content for the game. To make the page more interactive, an animation has been added to each of the "buttons" that give the impression of it jumping when hovered over. A shadow was added to emphasise this animation.

Originally, these "buttons" displayed the following text:

![old hiragana-go button](docs/screenshots/hiragana-go-old.png)

![old katakana-go button](docs/screenshots/katakana-go-old.png)

However, the first character used here is the Japanese kanji for "go". As this site is aimed at beginners wanting to practise hiragana and katakana only, it seemed unreasonable to include a kanji character as it is, due to the kanji alphabet being more advanced than the scope of this website. In many instances of Japanese media, such as newspapers, comics, and textbooks for school children, a type of phonetic notation is used to accompany kanji characters called *furigana*. Thankfully, W3C supports the use of furigana through [**ruby markup**](https://www.w3.org/International/articles/ruby/markup.en), and so the furigana for this kanji was added for increased readibility and accessibility for all levels of reading comprehension.

![hiragana-go button with furigana](docs/screenshots/hiragana-go-furigana.png)

![katakana-go button with furigana](docs/screenshots/katakana-go-furigana.png)

### **Hiragana and Katakana Game Pages**

#### **Game Area**

*
*
*
*

#### **Game Question**

*
*
*
*

#### **Game Answers**

*
*
*
*

#### **Current Score**

*
*
*
*

#### **Back to Homepage**

*
*
*
*

### **JavaScript on Game Pages**

#### **Main Game Functions**

*
*
*
*

#### **Unique Score Message**

*
*
*
*

## **Testing**

*
*
*
*


## **Technologies Used**

*
*
*
*

## **Deployment**

*
*
*
*

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