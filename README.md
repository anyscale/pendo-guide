# How to build an interactive diagram in Pendo
## Create the diagram in Figma
* Recommended width is 740px. Ideally the height shouldn't exceed 550px.
* When ready, export the entire diagram as an SVG and load the code into a text editor or IDE (easier for editing than in Pendo).
## Embed the diagram
* In your Pendo guide, create a new custom code block which will come with HTML / CSS / Javascript.
* Use the following HTML template to embed the SVG:
```
<div class="canvas">
    <svg width="740" height="425" viewBox="0 0 740 425" fill="none" xmlns="http://www.w3.org/2000/svg">
    ... your svg goes here
    </svg>
</div>
<div class="info-panel">
    <div id="info-vscode" class="info">
        ...
    </div>
</div>
```
## Edit the diagram for interactivity
* Use Chrome inspector to locate the part of SVG you want to make interactive.
* Group these elements under a `<g id="module-xyz> class="module">` tag. Ideally there is a `<rect>` element in the group to serve as the container for interactioins and highlighting. Tag the element with `class="container"`. For example:
```
<g id="module-head-node-storage" class="module">
    <rect class="container" width="65" height="68" transform="translate(49.666 208)" fill="white" />
    <g clip-path="url(#clip5_2389_40273)">
        <path ... />
    </g>
    <path ... />
</g>
```
## Create the info you want to show when the diagram is clicked.
* In the `div.info-panel`, create a new `<div>` with `id="info-xyz"` (`xyz` from the id of the corresponding `<g>` above) and add the content.
## Styling
* Copy the CSS to Pendo's CSS tab.
## Add interactivity
* Copy the Javascript to Pendo's Javascript tab.
* Add the module names (e.g. `xyz`) to the `names` array in the Javascript template.