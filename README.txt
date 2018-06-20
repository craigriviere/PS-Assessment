PaymentSense Assessment by Craig Riviere

Time Taken: 3.5 hours

Directions:
- npm install
- npm run dev
- Navigate to: http://localhost:8080/

- You can run the built version but it has been minfied, it can be found under the 'dist' folder just run the folder as a http server.

Approach:
I start with a standard webpack, HTML, SCSS boilerplate to get started quickly. 
I firstly decided to try something new with CSS Flexbox, because you mentioned 'only new browsers' I thought I would take the newest approach to floating elements,
therefore the majority of the elements are using flexbox, there are no elements using 'float'
I kicked off with a header and overall header wrapper, as it is very common the wrapper will come in handy (which it did in the future)
I started mobile first making sure to get all elements down, hiding the ones that did not need to appear on mobile and then aligning the mobile elements accordingly,
I almost did the dropdown menu as well until I re-read the notes
I then moved onto tablet, which again was about aligning items using flexbox and making sure the elements being swapped were contained separately, in an attempt to ensure
swapping between elements when a user scrolls down is easy and can be triggered using one class
I ideally did not want to absolutely position the free quote box, but it seemed my previous method was not working the way I anticpated, plus it is a safe way to ensure the
quote box fills the space available despite the overall padding on the header
I took a modular / BEM approach with my styling, I find it clearer to understand what styles are associated with each elements, in addition which elements interact with each other,
plus it ensures styles from other elements do not leak into each other, making the project more complex.
I chose to use vanilla JavaScript to enable the functionality of detecting when the window was scrolled to activate a single class on the header to allow it to shrink

Why I took my approach:
I chose to use a boilerplate to avoid messing with configuration, SCSS because a pre processor is the best way forward with CSS in addition to making it easier to be modular.
I chose webpack because I've been trying to use more of it as I used grunt a lot in the past.
I generally try to split out sections where I can to allow them to almost interact individually from each other, for ease of control and in cases where design changes, it is
a habit of mine
The habit is quite apparent due to how I split sections with commenting in my HTML and how I name my elements classes in CSS
I chose to use Vanilla JavaScript because I've been trying to move away from frameworks plus this will assist in my ReactJs development and its always best to know what goes on 
behind closed doors, IE behing frameworks. 

Overall it was a decent challenge to see if design can be translated to code accurately and efficently, I know I could go back and steamline a few of my classes and potentially make
structure changes to allow for less HTML, but overall I feel my solution is quite stable.

It only took me 3.5 hours which is over the time because of me trying to use flexbox as my new method therefore I spent a lot of time trying that out, but this would of probably
taken me 2.5 hours if i simply went with methods I knew from the past, floating etc, but just takes more 'hacky' methods for centering contnet.

I do not mind being honest about the time because it was a common task I'm used to but I thought it will only be fun if I can learn something new, which I did, so thank you for the opportunity,
hopefully it matches your needs. It is better to create sometype of fun in the work we do. 

External Resources Used:
- HTML, SCSS, Webpack Boilerplate - https://github.com/cvgellhorn/webpack-boilerplate
- Normalize SCSS - https://github.com/kristerkari/normalize.scss