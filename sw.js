async function handleGenerate(type, customPrompt) {
    const input = document.getElementById('userInput').value.trim();
    if (!input) return showToast('请先输入需要处理的文字');

    showToast('生成中...');
    
    // 如果设置了自定义提示词就用自定义的，没设就用默认前缀
    const promptHeader = customPrompt || `请将以下内容改写为【${type}】：`;

    setTimeout(async () => {
        // 拼接提示词 + 用户输入的原始内容
        const result = `${promptHeader}\n\n${input}`;
        await navigator.clipboard.writeText(result);
        showToast(`【${type}】已生成并复制！`);
    }, 600);
}

