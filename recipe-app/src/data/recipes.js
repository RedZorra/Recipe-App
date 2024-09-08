const recipes = [
    {
        id: 1,
        name: 'Apple Pie',
        category: 'Dessert',
        featured: true,
        image: 'src/images/Apple-Pie.jpg',
        ingredients: [
            '1/2 cup sugar',
            '1/2 cup packed brown sugar',
            '3 tablespoons all-purpose flour',
            '1 teaspoon ground cinnamon',
            '1/4 teaspoon ground ginger',
            '1/4 teaspoon ground nutmeg',
            '6 to 7 cups thinly sliced peeled tart apples',
            '1 tablespoon lemon juice',
            'Pastry for double-crust pie',
            '1 tablespoon butter'
        ],
        instructions: [
            'In a small bowl, combine sugars, flour and spices; set aside. In a large bowl, toss apples with lemon juice. Add sugar mixture; toss to coat.',
            'On a lightly floured surface, roll one half of dough to a 1/8-in.-thick circle; transfer to a 9-in. pie plate. Trim even with rim. Add filling; dot with butter. Roll remaining dough to a 1/8-in.-thick circle. Place over filling. Trim, seal and flute edge. Cut slits in top. Beat egg white until foamy; brush over crust. Sprinkle with sugar. Cover edge loosely with foil.',
            'Bake at 375° for 25 minutes. Remove foil; bake until crust is golden brown and filling is bubbly, 20-25 minutes longer. Cool on a wire rack.'
        ]
    },
    {
        id: 2,
        name: 'Avocado Toast',
        category: 'Breakfast',
        featured: true,
        image: 'src/images/Avocado-toast.jpg',
        ingredients: [
            '2 slices of bread',
            '1 avocado',
            '1 tablespoon olive oil',
            '1 pinch of salt',
            '1 pinch of pepper',
            '1 pinch of chili flakes',
            '1 teaspoon lemon juice'
        ],
        instructions: [
            'Toast the bread to your liking.',
            'Cut the avocado in half and remove the pit. Scoop out the flesh and place it in a bowl.',
            'Mash the avocado with a fork until smooth. Add the olive oil, salt, pepper, chili flakes, and lemon juice. Mix until well combined.',
            'Spread the avocado mixture on the toast and enjoy!'
        ]
    },
    {
        id: 3,
        name: 'Lentil-Curry with Cocos & Spinach',
        category: 'Main Dish',
        featured: true,
        image: 'src/images/Lentil-curry.jpg',
        ingredients: [
            '1 cup lentils',
            '1 onion',
            '2 cloves of garlic',
            '1 tablespoon curry powder',
            '1 teaspoon cumin',
            '1 teaspoon paprika',
            '1 can of coconut milk',
            '2 cups of spinach',
            '1 tablespoon olive oil',
            'Salt',
            'Pepper'
        ],
        instructions: [
            'Cook the lentils according to the package instructions.',
            'In a large pan, heat the olive oil over medium heat. Add the onion and garlic and cook until softened.',
            'Add the curry powder, cumin, and paprika. Cook for 1-2 minutes until fragrant.',
            'Stir in the coconut milk and bring to a simmer.',
            'Add the cooked lentils and spinach. Cook until the spinach is wilted.',
            'Season with salt and pepper to taste.',
            'Serve the lentil curry with rice or naan bread.'
        ]
    },
    {
        id: 4,
        name: 'Beetroot-Burger with Avocado',
        category: 'Main Dish',
        featured: true,
        image: 'src/images/Beetroot-burger.jpg',
        ingredients: [
            '2 large beetroots',
            '1 can of black beans',
            '1 onion',
            '2 cloves of garlic',
            '1 teaspoon cumin',
            '1 teaspoon paprika',
            '1/2 cup breadcrumbs',
            '1 avocado',
            '4 burger buns',
            'Lettuce, tomato, pickles, etc. for topping'
        ],
        instructions: [
            'Preheat the oven to 400°F (200°C).',
            'Peel and grate the beetroots. Place them on a baking sheet and roast in the oven for 20-30 minutes until softened.',
            'In a food processor, pulse the black beans until mashed but still chunky. Add the roasted beetroots, onion, garlic, cumin, paprika, and breadcrumbs. Pulse until well combined.',
            'Form the mixture into patties and place them on a baking sheet. Bake for 20-30 minutes until firm.',
            'Serve the beetroot burgers on buns with sliced avocado and your favorite toppings.'
        ]
    },
    {
        id: 5,
        name: 'Quinoa salad with chickpeas and mint',
        category: 'Salad',
        featured: true,
        image: 'src/images/Quinoa-salad.jpg',
        ingredients: [
            '1 cup quinoa',
            '1 can of chickpeas',
            '1 cucumber',
            '1/2 cup cherry tomatoes',
            '1/4 cup fresh mint',
            '1/4 cup olive oil',
            '1 lemon',
            'Salt',
            'Pepper'
        ],
        instructions: [
            'Cook the quinoa according to the package instructions.',
            'Rinse and drain the chickpeas. Dice the cucumber and halve the cherry tomatoes.',
            'In a large bowl, combine the quinoa, chickpeas, cucumber, tomatoes, and mint.',
            'Drizzle with olive oil and the juice of one lemon. Season with salt and pepper to taste.',
            'Toss the salad until well combined. Serve chilled or at room temperature.'
        ]
    },
    {
        id: 6,
        name: 'Vegetable lasagne with béchamel sauce',
        category: 'Main Dish',
        featured: true,
        image: 'src/images/Vegetable-lasagne.jpg',
        ingredients: [
            '1 onion',
            '2 cloves of garlic',
            '1 zucchini',
            '1 eggplant',
            '1 red bell pepper',
            '1 can of diced tomatoes',
            '1 tablespoon tomato paste',
            '1 teaspoon dried oregano',
            '1 teaspoon dried basil',
            '1/2 cup red wine',
            '1/4 cup fresh parsley',
            'Salt',
            'Pepper',
            'Lasagne sheets',
            '1 cup grated cheese'
        ],
        instructions: [
            'Preheat the oven to 375°F (190°C).',
            'In a large pan, heat some olive oil over medium heat. Add the onion and garlic and cook until softened.',
            'Add the zucchini, eggplant, and bell pepper. Cook until the vegetables are softened.',
            'Stir in the diced tomatoes, tomato paste, oregano, basil, red wine, and parsley. Season with salt and pepper to taste.',
            'In a baking dish, layer the vegetable mixture with lasagne sheets and béchamel sauce. Repeat until all the ingredients are used up, ending with a layer of béchamel sauce.',
            'Top with grated cheese and bake in the oven for 30-40 minutes until bubbly and golden brown.',
            'Let the lasagne sit for a few minutes before serving. Enjoy!'
        ]
    },
    {
        id: 7,
        name: 'Chocolate Cake',
        category: 'Dessert',
        featured: true,
        image: 'src/images/Chocolate-Cake.jpg',
        ingredients: [
            '1 3/4 cups all-purpose flour',
            '2 cups sugar',
            '3/4 cup cocoa powder',
            '2 teaspoons baking soda',
            '1 teaspoon baking powder',
            '1 teaspoon salt',
            '2 eggs',
            '1 cup whole milk',
            '1/2 cup vegetable oil',
            '2 teaspoons vanilla extract',
            '1 cup boiling water'
        ],
        instructions: [
            'Preheat oven to 350°F (175°C). Grease and flour two 9-inch round baking pans.',
            'In a large bowl, combine flour, sugar, cocoa powder, baking soda, baking powder, and salt. Add eggs, milk, oil, and vanilla. Beat on medium speed for 2 minutes.',
            'Stir in boiling water (batter will be thin). Pour into prepared pans.',
            'Bake for 30-35 minutes or until a toothpick inserted into the center comes out clean.',
            'Cool in pans for 10 minutes. Remove from pans and cool completely on a wire rack.'
        ]
    },
    {
        id: 8,
        name: 'Pancakes',
        category: 'Breakfast',
        featured: true,
        image: 'src/images/Pancakes.jpg',
        ingredients: [
            '1 cup all-purpose flour',
            '2 tablespoons sugar',
            '2 teaspoons baking powder',
            '1/2 teaspoon salt',
            '1 egg',
            '3/4 cup milk',
            '1/4 cup vegetable oil'
        ],
        instructions: [
            'In a bowl, combine flour, sugar, baking powder, and salt.',
            'In another bowl, beat the egg, milk, and oil. Stir into dry ingredients just until moistened.',
            'Pour batter by 1/4 cupfuls onto a greased hot griddle. Turn when bubbles form on top of pancakes; cook until the second side is golden brown.'
        ]
    },
    {
        id: 9,
        name: 'Greek Salad',
        category: 'Salad',
        featured: true,
        image: 'src/images/Greek-Salad.jpg',
        ingredients: [
            '1 cucumber',
            '1 red bell pepper',
            '1 yellow bell pepper',
            '1/2 red onion',
            '1 cup cherry tomatoes',
            '1/2 cup kalamata olives',
            '1/2 cup feta cheese',
            '1/4 cup olive oil',
            '1 lemon',
            '1 teaspoon dried oregano',
            'Salt',
            'Pepper'
        ],
    },
    {
        id: 10,
        name: 'Minestrone Soup',
        category: 'Soup',
        featured: true,
        image: 'src/images/Minestrone-soup.jpg',
        ingredients: [
            '1 onion',
            '2 cloves of garlic',
            '2 carrots',
            '2 celery stalks',
            '1 zucchini',
            '1 yellow squash',
            '1 can of diced tomatoes',
            '1 can of kidney beans',
            '6 cups vegetable broth',
            '1 cup small pasta',
            '1/4 cup fresh parsley',
            '1/4 cup fresh basil',
            '1/4 cup grated Parmesan cheese',
            'Salt',
            'Pepper'
        ],
        instructions: [
            'In a large pot, heat some olive oil over medium heat. Add the onion and garlic and cook until softened.',
            'Add the carrots, celery, zucchini, and yellow squash. Cook until the vegetables are softened.',
            'Stir in the diced tomatoes, kidney beans, vegetable broth, and pasta. Bring to a simmer and cook until the pasta is tender.',
            'Stir in the parsley and basil. Season with salt and pepper to taste.',
            'Serve the minestrone soup topped with grated Parmesan cheese.'
        ]
    },
    {
        id: 11,
        name: 'Tomato Basil Soup',
        category: 'Soup',
        featured: true,
        image: 'src/images/Tomaten-Basil-soup.jpg',
        ingredients: [
            '2 tablespoons olive oil',
            '1 onion, chopped',
            '2 cloves garlic, minced',
            '1 can (28 ounces) crushed tomatoes',
            '2 cups vegetable broth',
            '1 teaspoon dried basil',
            'Salt and pepper to taste',
            'Fresh basil leaves for garnish'
        ],
        instructions: [
            'In a large pot, heat olive oil over medium heat. Add onion and garlic, sauté until softened.',
            'Stir in crushed tomatoes, vegetable broth, and dried basil. Bring to a boil, then reduce heat and simmer for 20 minutes.',
            'Use an immersion blender to puree the soup until smooth. Season with salt and pepper to taste.',
            'Serve hot, garnished with fresh basil leaves.'
        ]
    },
    {
        id: 12,
        name: 'Chicken Noodle Soup',
        category: 'Soup',
        featured: true,
        image: 'src/images/Chicken-Noodle-Soup.jpg',
        ingredients: [
            '1 tablespoon olive oil',
            '1 onion, chopped',
            '2 carrots, sliced',
            '2 celery stalks, sliced',
            '2 cloves garlic, minced',
            '6 cups chicken broth',
            '2 cups cooked chicken, shredded',
            '1 cup egg noodles',
            'Salt and pepper to taste',
            'Fresh parsley for garnish'
        ],
        instructions: [
            'In a large pot, heat olive oil over medium heat. Add onion, carrots, and celery; sauté until softened.',
            'Add garlic and cook for another minute. Pour in chicken broth and bring to a boil.',
            'Stir in the cooked chicken and egg noodles. Cook until noodles are tender, about 8-10 minutes.',
            'Season with salt and pepper to taste. Serve hot, garnished with fresh parsley.'
        ]
    },
    {
        id: 13,
        name: 'Garlic Mashed Potatoes',
        category: 'Side Dish',
        featured: true,
        image: 'src/images/Garlic-mashed-potatoes.jpeg',
        ingredients: [
            '2 pounds potatoes, peeled and cubed',
            '4 cloves garlic, minced',
            '1/2 cup milk',
            '1/4 cup butter',
            'Salt and pepper to taste',
            'Chopped chives for garnish'
        ],
        instructions: [
            'In a large pot, boil potatoes in salted water until tender, about 15-20 minutes.',
            'Drain and return potatoes to the pot. Add minced garlic, milk, and butter.',
            'Mash the potatoes until smooth and creamy. Season with salt and pepper to taste.',
            'Serve hot, garnished with chopped chives.'
        ]
    },
    {
        id: 14,
        name: 'Roasted Brussels Sprouts',
        category: 'Side Dish',
        featured: true,
        image: 'src/images/Roasted-Brussels-Sprouts.jpeg',
        ingredients: [
            '1 pound Brussels sprouts, trimmed and halved',
            '2 tablespoons olive oil',
            'Salt and pepper to taste',
            '1 tablespoon balsamic vinegar (optional)'
        ],
        instructions: [
            'Preheat oven to 400°F (200°C).',
            'Toss Brussels sprouts with olive oil, salt, and pepper in a bowl.',
            'Spread on a baking sheet in a single layer. Roast for 20-25 minutes until crispy and golden brown.',
            'Drizzle with balsamic vinegar before serving, if desired.'
        ]
    },
    {
        id: 15,
        name: 'Vegetable Minestrone',
        category: 'Soup',
        featured: true,
        image: 'src/images/Vegetarian-Minestrone.jpg',
        ingredients: [
            '2 tablespoons olive oil',
            '1 onion, chopped',
            '2 carrots, diced',
            '2 celery stalks, diced',
            '2 cloves garlic, minced',
            '1 zucchini, diced',
            '1 can (14 ounces) diced tomatoes',
            '4 cups vegetable broth',
            '1 can (15 ounces) kidney beans, drained',
            '1 cup pasta (small shapes)',
            'Salt and pepper to taste',
            'Fresh basil for garnish'
        ],
        instructions: [
            'In a large pot, heat olive oil over medium heat. Add onion, carrots, and celery; sauté until softened.',
            'Add garlic and zucchini; cook for another 2 minutes.',
            'Stir in diced tomatoes, vegetable broth, and kidney beans. Bring to a boil.',
            'Add pasta and cook until tender, about 10 minutes.',
            'Season with salt and pepper to taste. Serve hot, garnished with fresh basil.'
        ]
    },
    {
        id: 16,
        name: 'Creamy Potato Leek Soup',
        category: 'Soup',
        featured: true,
        image: 'src/images/Creamy-potato-leek.jpg',
        ingredients: [
            '2 tablespoons butter',
            '2 leeks, white part only, sliced',
            '4 potatoes, peeled and diced',
            '4 cups vegetable broth',
            '1 cup heavy cream',
            'Salt and pepper to taste',
            'Chives for garnish'
        ],
        instructions: [
            'In a large pot, melt butter over medium heat. Add leeks and sauté until soft.',
            'Add potatoes and vegetable broth; bring to a boil. Reduce heat and simmer until potatoes are tender, about 15 minutes.',
            'Use an immersion blender to puree the soup until smooth.',
            'Stir in heavy cream and season with salt and pepper. Serve hot, garnished with chives.'
        ]
    },
    {
        id: 17,
        name: 'Caesar Salad',
        category: 'Salad',
        featured: true,
        image: 'src/images/Caesar-salad.jpeg',
        ingredients: [
            '1 head romaine lettuce, chopped',
            '1/2 cup Caesar dressing',
            '1/4 cup grated Parmesan cheese',
            'Croutons for topping',
            'Freshly ground black pepper to taste'
        ],
        instructions: [
            'In a large bowl, combine chopped romaine lettuce and Caesar dressing; toss to coat.',
            'Add grated Parmesan cheese and croutons; toss again.',
            'Season with freshly ground black pepper before serving.'
        ]
    },
    {
        id: 18,
        name: 'Greek Quinoa Salad',
        category: 'Salad',
        featured: true,
        image: 'src/images/Greek-Quinoa-Salad.jpg',
        ingredients: [
            '1 cup quinoa, cooked',
            '1 cup cherry tomatoes, halved',
            '1 cucumber, diced',
            '1/2 cup Kalamata olives, pitted and halved',
            '1/2 cup feta cheese, crumbled',
            '2 tablespoons olive oil',
            '1 tablespoon red wine vinegar',
            'Salt and pepper to taste',
            'Fresh parsley for garnish'
        ],
        instructions: [
            'In a large bowl, combine cooked quinoa, cherry tomatoes, cucumber, olives, and feta cheese.',
            'In a small bowl, whisk together olive oil, red wine vinegar, salt, and pepper.',
            'Pour dressing over the salad and toss to combine. Garnish with fresh parsley before serving.'
        ]
    },
    {
        id: 19,
        name: 'Roasted Vegetable Medley',
        category: 'Side Dish',
        featured: true,
        image: 'src/images/Roasted-vegetable-Medley.jpeg',
        ingredients: [
            '2 cups mixed vegetables (carrots, bell peppers, zucchini, etc.)',
            '2 tablespoons olive oil',
            '1 teaspoon dried thyme',
            'Salt and pepper to taste'
        ],
        instructions: [
            'Preheat oven to 425°F (220°C).',
            'In a bowl, toss mixed vegetables with olive oil, thyme, salt, and pepper.',
            'Spread on a baking sheet in a single layer and roast for 20-25 minutes until tender and caramelized.'
        ]
    },
    {
        id: 20,
        name: 'Coleslaw',
        category: 'Side Dish',
        featured: true,
        image: 'src/images/Coleslaw.jpg',
        ingredients: [
            '4 cups shredded cabbage',
            '1 cup shredded carrots',
            '1/2 cup mayonnaise',
            '1 tablespoon apple cider vinegar',
            '1 tablespoon sugar',
            'Salt and pepper to taste'
        ],
        instructions: [
            'In a large bowl, combine shredded cabbage and carrots.',
            'In a small bowl, whisk together mayonnaise, apple cider vinegar, sugar, salt, and pepper.',
            'Pour dressing over the cabbage mixture and toss to combine. Chill before serving.'
        ]  
    }
];

export default recipes;