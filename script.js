document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();

    const excuses = [
        "My cat is sitting on my keyboard",
        "I'm waiting for my creativity to recharge",
        "I'm mentally preparing for the work I'm not doing",
        "I'm practicing my telepathic skills to complete tasks",
        "I'm conserving energy for future productivity",
        "I'm letting my ideas marinate in procrastination sauce",
        "I'm on a coffee break... without the coffee",
        "I'm visualizing my success (with my eyes closed)",
        "I'm building suspense for when I actually start working",
        "I'm testing the limits of last-minute panic"
    ];

    const uselessFacts = [
        "A crocodile can't stick its tongue out.",
        "The King of Hearts is the only king without a mustache.",
        "The name of all the continents end with the same letter that they start with.",
        "A cat has 32 muscles in each ear.",
        "A goldfish's attention span is three seconds.",
        "Elephants are the only animals that can't jump.",
        "The longest word in the English language is 189,819 letters long.",
        "Slugs have four noses.",
        "Bananas are curved because they grow towards the sun.",
        "The Hawaiian alphabet has 12 letters."
    ];

    let wastedTime = 0;
    let progress = 0;
    let antiTodos = [];

    const generateExcuse = () => {
        const excuse = excuses[Math.floor(Math.random() * excuses.length)];
        document.getElementById('excuse').textContent = `"${excuse}"`;
        document.getElementById('excuse').classList.remove('hidden');
    };

    const wasteTime = () => {
        wastedTime += Math.floor(Math.random() * 10) + 1;
        document.getElementById('wastedTime').textContent = `You've wasted ${wastedTime} virtual minutes!`;
    };

    const generateFact = () => {
        const fact = uselessFacts[Math.floor(Math.random() * uselessFacts.length)];
        document.getElementById('fact').textContent = fact;
        document.getElementById('fact').classList.remove('hidden');
    };

    const updateProgress = () => {
        progress = (progress + 1) % 101;
        document.getElementById('progress').style.width = `${progress}%`;
        document.getElementById('progressText').textContent = `${progress}% procrastinated - Keep going!`;
    };

    const addAntiTodo = () => {
        const input = document.getElementById('newAntiTodo');
        const todo = input.value.trim();
        if (todo) {
            antiTodos.push(todo);
            input.value = '';
            renderAntiTodos();
        }
    };

    const removeAntiTodo = (index) => {
        antiTodos = antiTodos.filter((_, i) => i !== index);
        renderAntiTodos();
    };

    const renderAntiTodos = () => {
        const list = document.getElementById('antiTodoList');
        list.innerHTML = '';
        antiTodos.forEach((todo, index) => {
            const li = document.createElement('li');
            li.className = 'anti-todo-item';
            li.innerHTML = `
                <span>${todo}</span>
                <button onclick="removeAntiTodo(${index})">
                    <i data-lucide="x-circle"></i>
                </button>
            `;
            list.appendChild(li);
        });
        lucide.createIcons();
    };

    document.getElementById('generateExcuse').addEventListener('click', generateExcuse);
    document.getElementById('wasteTime').addEventListener('click', wasteTime);
    document.getElementById('generateFact').addEventListener('click', generateFact);
    document.getElementById('addAntiTodo').addEventListener('click', addAntiTodo);

    setInterval(updateProgress, 1000);

    window.removeAntiTodo = removeAntiTodo;
});