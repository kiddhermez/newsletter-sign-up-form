# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

-   [Overview](#overview)
    -   [The challenge](#the-challenge)
    -   [Screenshot](#screenshot)
    -   [Links](#links)
-   [My process](#my-process)
    -   [Built with](#built-with)
    -   [What I learned](#what-i-learned)
    -   [Continued development](#continued-development)
-   [Author](#author)

## Overview

### The challenge

Users should be able to:

-   Add their email and submit the form
-   See a success message with their email after successfully submitting the form
-   See form validation messages if:
    -   The field is left empty
    -   The email address is not formatted correctly
-   View the optimal layout for the interface depending on their device's screen size
-   See hover and focus states for all interactive elements on the page

### Screenshot

![Screenshot](./public/screenshot.png)

### Links

-   Solution URL: [Add solution URL here](https://your-solution-url.com)
-   Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

-   Flexbox
-   CSS Grid
-   [React](https://reactjs.org/) - JS library
-   [Next.js](https://nextjs.org/) - React framework
-   [Framer Motion](https://www.framer.com/motion/) - For animations
-   [Tailwind CSS](https://tailwindcss.com/) - For styles
-   [React Hook Forms](https://www.react-hook-form.com/) - For form valitation

### What I learned

I improve my use of react, next.js, framer motion and tailwind
in all desing part, but the most important kwnowledge that I acquired
was the use of <b>React Hook Form</b>.

This hook valides the <b>< form /></b> and gave me a simple way to
edit the error messsages.

``` javascript
const {
    register,
    formState: { errors },
    handleSubmit,
} = useForm(); // Hook to validate the <Form>

const onSubmit = (data) => {
        setEmail(data.email); // Data send
    };

return (
    <form onSubmit={handleSubmit(onSubmit)} >
        <div className={...}>
            <p>Email address</p>
            {errors.email && ( <p className={...}>{errors.email.message}</p> )} // Print error message
        </div>
        <input
            type='text'
            name='email'
            {...register('email', {
                required: 'This field is required', // Error for necesary field
                pattern: {
                    value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: 'Write a valid email', // Error for wrong format
                },
            })}
            autoComplete='off'
            placeholder='email@company.com'
            className={...}
        ></input>
        <Submit text='Subscribe to monthly newsletter' />
    </form>
);
```

### Continued development

I want continue improving my skills in the tecnologies that I was using in this project

## Author

-   Frontend Mentor - [@kiddhermez](https://www.frontendmentor.io/profile/kiddhermez)