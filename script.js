const scenarios = {
  spec: {
    index: '01',
    title: 'Plan only what the task needs.',
    copy: 'The graph models dependencies among agents, tools, generation stages, and artifacts so the system can determine task order, targeted context, and model/tool selection.',
    list: ['Graph-based execution planning', 'Context-window management', 'Model and tool selection']
  },
  execute: {
    index: '02',
    title: 'Compose capabilities without rewriting the core.',
    copy: 'A plugin-based agent harness lets teams add tools, validators, context providers, model strategies, and iterative workflows as reusable components.',
    list: ['Plugin-based agent harness', 'MCP and enterprise tool integrations', 'Parallel independent execution']
  },
  observe: {
    index: '03',
    title: 'Make agent behavior explainable.',
    copy: 'The observability layer traces every LLM call, agent execution, tool invocation, model decision, latency, failure, and orchestration step for production debugging.',
    list: ['LLM and agent trajectory tracing', 'Latency and failure visibility', 'Model / tool decision audit trail']
  },
  recover: {
    index: '04',
    title: 'Validate, diagnose, repair, continue.',
    copy: 'Evaluation, consistency checking, validation, and automated self-repair make it possible to target failures rather than restarting an expensive generation process.',
    list: ['Evaluation and consistency checks', 'Automated repair stages', 'Targeted execution and prompt caching']
  }
};

const shell = document.querySelector('.scenario-shell');
const title = document.querySelector('[data-scenario-title]');
const copy = document.querySelector('[data-scenario-copy]');
const index = document.querySelector('[data-scenario-index]');
const list = document.querySelector('[data-scenario-list]');
const tabs = document.querySelectorAll('.scenario-tab');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const key = tab.dataset.scenarioTarget;
    const scenario = scenarios[key];
    shell.dataset.scenario = key;
    tabs.forEach((item) => {
      const active = item === tab;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-selected', String(active));
    });
    index.textContent = scenario.index;
    title.textContent = scenario.title;
    copy.textContent = scenario.copy;
    list.replaceChildren(...scenario.list.map((item) => {
      const li = document.createElement('li');
      li.textContent = item;
      return li;
    }));
  });
});
