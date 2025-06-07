document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('no');
    const other = document.getElementById('yes');

    // 定义按钮的不同模式和对应的文字
    const modes = [
        { scale: 1, text: "儿子" },
        { scale: 0.8, text: "再说一遍？" },
        { scale: 0.6, text: "最后一次机会..." },
        { scale: 0.4, text: "快叫！" }
    ];

    let currentMode = 0;

    button.addEventListener('click', function () {
        // 更新当前模式
        if (currentMode == 3) {
            currentMode = currentMode;
        } else {
            currentMode = currentMode + 1;
        }

        const mode = modes[currentMode];

        // 应用新模式
        other.style.transform = `scale(${1 / mode.scale})`;
        button.style.transform = `scale(${mode.scale})`;
        button.textContent = mode.text;
    });
});
