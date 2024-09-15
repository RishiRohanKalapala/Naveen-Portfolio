
# Portfolio Website

This is a responsive portfolio website designed to showcase Photography, Video Editing, Graphic Design, and Logo Design work. The website features a blue-black gradient navigation bar, visually engaging sections for each portfolio category, and a responsive hamburger menu for smaller screens.

## Features

- **Responsive Design**: Adapts well to different screen sizes with a mobile-friendly hamburger menu.
- **Blue-Black Gradient Navigation Bar**: Stylish menu bar aligned to the right side of the page.
- **Photography Showcase**: Features dummy images to simulate a real portfolio.
- **Video Editing Section**: Includes a grid layout with hover effects for better interaction.
- **Graphic Design and Logo Design**: Similar design elements to maintain consistency across all pages.
- **Smooth Transitions**: Hover effects and scaling animations for images to enhance user experience.
- **Footer**: Simple footer with branding information.

## Sections

### 1. Photography
Displays a featured image with additional smaller thumbnails below in a grid layout. This section highlights the user's photography skills.

### 2. Video Editing
This section features a large video thumbnail, followed by a grid layout of smaller video thumbnails with scaling hover effects.

### 3. Graphic Design
A showcase for creative designs with a grid layout for visual representation of the user's work.

### 4. Logo Design
This section highlights the user's logo design projects, organized in a grid for easy viewing.

## Technologies Used

- **HTML5**: Provides the structure and layout of the web pages.
- **CSS3**: Used for styling the pages, including animations, layouts, and responsive design.
- **JavaScript**: Powers the responsive hamburger menu for small screens.
- **Google Fonts**: Used for typography and aesthetic improvements.

## Responsive Design

The site is fully responsive and includes media queries to adapt the layout to different screen sizes. On smaller screens, the navigation menu collapses into a hamburger icon, and the portfolio grids adjust to ensure optimal viewing experience.

### Screens Supported
- **Desktop**: Full layout with the menu bar aligned to the right.
- **Tablet**: Condensed layout with scaled images.
- **Mobile**: Hamburger menu for easy navigation and well-adjusted grids.

## Project Setup

1. Clone this repository.
    ```bash
    git clone https://github.com/your-username/portfolio-website.git
    ```
2. Navigate to the project directory:
    ```bash
    cd portfolio-website
    ```
3. Open the `index.html` file in a browser to view the website.

## File Structure

```
.
├── index.html            # Main page with all portfolio sections
├── styles.css            # Contains all the CSS styles for the pages
├── README.md             # Documentation of the project
└── images                # Folder containing dummy images for the showcase
```

## Customization

### Adding New Portfolio Items

- To add new items to any section, open the `index.html` file.
- Navigate to the relevant section (Photography, Video Editing, etc.).
- Add a new `div` inside the respective grid with an `img` tag pointing to your new image source.

Example:
```html
<div class="photo-item">
    <img src="https://via.placeholder.com/300x300" alt="New Photo">
</div>
```

### Adjusting the Navigation Bar

The navigation bar links can be customized by updating the URLs in the `index.html` file under the `<ul>` element inside the `navbar`.

```html
<ul id="menu">
    <li><a href="#photography">Photography</a></li>
    <li><a href="#video-editing">Video Editing</a></li>
    <li><a href="#graphic-design">Graphic Design</a></li>
    <li><a href="#logo-design">Logo Design</a></li>
</ul>
```

## Future Enhancements

- **Form Integration**: Adding a contact form for potential clients.
- **Dynamic Content**: Integrating a CMS or JavaScript to dynamically load content.
- **Performance Optimization**: Compressing images and minifying CSS/JS files for faster load times.

## License

This project is licensed under the MIT License. You are free to use, modify, and distribute this project for personal or commercial use.

