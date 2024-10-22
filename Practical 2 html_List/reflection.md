## Lesson:

1. Basic HTML Structure:

The structure starts with the <!DOCTYPE html> declaration, followed by the html, head, and body tags. I used meta tags to ensure proper character encoding (UTF-8) and to make the page responsive across devices (viewport tag).


2. Creating Lists and Hierarchies:

I used nested tags to represent lists of events and their details (e.g., venue, time). List items were customized using CSS, including marker changes.


3. CSS for Styling:

I've applied styles using both element IDs (like #one) and class selectors (like .a). I used hover effects to change colors when the user hovers over a specific list item. Also customized list item markers using li::marker to display a heart symbol 💜.


4. IDs and Classes:

IDs like #one were used for unique styling, and multiple elements were mistakenly given the same ID. This can cause issues as IDs should be unique. Therefore, classes (e.g., .a, .b, etc.) were used to apply styles to groups of elements, enabling hover effects for different event categories.



## Challenges and Solutions:

1. List Nesting:

Challenge: Nested tags have created a confusing structure if not handled properly.

Solution: It's better to use list items directly inside a single nested tag instead of repeating multiple nested elements. This reduces unnecessary nesting and makes the HTML more readable.


2. Responsive Design:

Challenge: Making sure the webpage looks good on all devices, especially with text and layout.

Solution: Using the meta tag for the viewport helps scale the page correctly on mobile and tablets. In future, you could add media queries in CSS for more tailored responsive styling.


3. Customizing List Items:

Challenge: Using the default bullet points may not fit the desired design.

Solution: Using the ::marker pseudo-element to replace default list markers with a custom heart icon, enhancing visual appeal.