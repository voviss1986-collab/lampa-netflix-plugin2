(function () {
    'use strict';

    if (!window.Lampa) return;

    const pluginName = 'netflix_test_plugin';

    function openPage() {
        const page = document.createElement('div');

        page.style.background = '#141414';
        page.style.color = '#fff';
        page.style.padding = '30px';
        page.style.fontSize = '18px';

        page.innerHTML = `
            <h1 style="font-size:28px; margin-bottom:15px;">🎬 Плагин работает!</h1>
            <p>Если ты видишь этот экран — плагин успешно загружен и функционирует.</p>
        `;

        Lampa.Activity.push({
            title: 'Тест плагина',
            component: 'plugin',
            page: page
        });
    }

    Lampa.Plugin.add(pluginName, {
        name: 'Тест Netflix-плагина',
        description: 'Проверка работы в браузере и на TV',
        version: '1.0.0',

        onStart: function () {
            Lampa.Menu.add({
                title: '🧪 Тест плагина',
                onSelect: openPage
            });
        }
    });

})();
