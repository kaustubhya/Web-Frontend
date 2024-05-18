The `main` element is used to represent the main content of the body of an HTML document. Content inside the `main` element should be unique to the document and should not be repeated in other parts of the document.

`section` tag divides the page into different sections.

`em` tag emphasizes the text when it is wrapped around the text.

`strong` tag bolds the text that is wrapped by this tag.

The action attribute indicates where form data should be sent.

Here is an example of a form element with an action attribute:

`<form action="/submit-url"></form>`

form:

In order for a form's data to be accessed by the location specified in the action attribute, you must give the text field a name attribute and assign it a value to represent the data being submitted.

Here is an example of an input element with a name attribute:

To prevent a user from submitting your form when required information is missing, you need to add the required attribute to an input element. There's no need to set a value to the required attribute. Instead, just add the word required to the input element, making sure there is space between it and other attributes.

The button element is used to create a clickable button.

Add a button element with the text Submit below the input element. The default behavior of clicking a form button without any attributes submits the form to the location specified in the form's action attribute.

Even though you added your button below the text input, they appear next to each other on the page. That's because both input and button elements are inline elements, which don't appear on new lines.

The button you added will submit the form by default. However, relying on default behavior may cause confusion. Add the type attribute with the value submit to the button to make it clear that it is a submit button.

label elements are used to help associate the text for an input element with the input element itself (especially for assistive technologies like screen readers).

The id attribute is used to identify specific HTML elements. Each id attribute's value must be unique from all other id values for the entire page.

🛑🛑 Notice that both radio buttons can be selected at the same time. To make it so selecting one radio button automatically deselects the other, both buttons must have a name attribute with the same value.

If you select the Indoor radio button and submit the form, the form data for the button is based on its name and value attributes. Since your radio buttons do not have a value attribute, the form data will include indoor-outdoor=on, which is not useful when you have multiple buttons.

The `fieldset` element is used to group related inputs and labels together in a web form. fieldset elements are block-level elements, meaning that they appear on a new line.

The `legend` element acts as a caption for the content in the fieldset element. It gives users context about what they should enter into that part of the form.

Forms commonly use checkboxes for questions that may have more than one answer. The input element with a type attribute set to checkbox creates a checkbox.

There's another way to associate an input element's text with the element itself. You can nest the text within a label element and add a for attribute with the same value as the input element's id attribute.

Like radio buttons, form data for selected checkboxes are name / value attribute pairs. While the value attribute is optional, it's best practice to include it with any checkboxes or radio buttons on the page.

In order to make a checkbox checked or radio button selected by default, you need to add the checked attribute to it.
There's no need to set a value to the checked attribute. Instead, just add the word checked to the input element, making sure there is space between it and other attributes.

You can set browser behavior by adding self-closing meta elements in the head. Here's an example:

<meta attribute="value">

Inside the head element, nest a meta element with an attribute named charset. Set to the value to utf-8 which tells the browser how to encode characters for the page.

Note that meta elements are self-closing.
