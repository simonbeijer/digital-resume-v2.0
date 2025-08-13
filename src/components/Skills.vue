<template>
  <div id="skills" class="skills-container">
    <div class="tag-cloud-wrapper sketchy">
      <div class="tag-cloud">
        <div v-for="(skill, index) in skillArr" :key="index" :class="`skill-tag skill-${skill.level}`">
          <img :src="skill.icon" :alt="skill.name" class="skill-icon" />
          <span class="skill-name">{{ skill.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Skills',
  data() {
    return {
      skillArr: [
        // Top skills (biggest)
        { name: "Vue.js", level: "large", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg" },
        { name: "React", level: "large", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" },
        { name: "Next.js", level: "large", icon: "https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg" },
        
        // Medium skills
        { name: "PHP", level: "large", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg" },
        { name: "Docker", level: "medium", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg" },
        { name: "TypeScript", level: "medium", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" },
        
        // Small-medium skills
        { name: "Git/GitHub", level: "small-medium", icon: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" },
        { name: "JavaScript", level: "small-medium", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" },
        { name: "SQL/MySQL", level: "small-medium", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg" },
        
        // Small skills
        { name: "HTML5", level: "small", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" },
        { name: "CSS3", level: "small", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" },
        { name: "VS Code", level: "small", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg" },
        { name: "jQuery", level: "small", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/jquery/jquery-original.svg" },
        { name: "Figma", level: "small", icon: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg" },
        { name: "Laravel", level: "small", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/laravel/laravel-original.svg" },
        { name: "Jest", level: "small", icon: "https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg" },
        { name: "React Native", level: "small", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" },
        { name: "Redux", level: "small", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" },
        { name: "MongoDB", level: "small", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" },
        { name: "Agile/Scrum", level: "small", icon: "https://www.vectorlogo.zone/logos/atlassian_jira/atlassian_jira-icon.svg" },
        { name: "Prompt Engineering", level: "small", icon: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3e%3cpath d='M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.078 6.078 0 0 0 6.499 2.9 5.991 5.991 0 0 0 5.197-4.738 6.046 6.046 0 0 0 4.058-2.913 5.99 5.99 0 0 0-.708-4.616zm-9.022 12.696v-5.22a1.58 1.58 0 0 0 1.143-.83 1.624 1.624 0 0 0-.017-1.59 1.579 1.579 0 0 0-1.126-.847v-5.224a1.58 1.58 0 0 0 1.143-.83 1.624 1.624 0 0 0-.017-1.59 1.579 1.579 0 0 0-1.126-.847V1.665a5.985 5.985 0 0 1 .516 4.91 6.046 6.046 0 0 1-6.51 2.9A6.065 6.065 0 0 1 4.981 4.18a5.985 5.985 0 0 1 3.998-2.9 6.046 6.046 0 0 1-.743-7.097z'/%3e%3c/svg%3e" }
      ]
    };
  }
};
</script>

<style scoped>
.skills-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;
  margin-left: 20px;
}

.tag-cloud-wrapper {
  width: 100%;
  max-width: 850px;
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 0 10px #e6e4e4;
}

.tag-cloud {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  align-items: center;
}

.skill-tag {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem;
  color: #495057;
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: pointer;
  text-align: center;
}

.skill-tag:hover {
  transform: translateY(-2px);
}

.skill-icon {
  width: 22px;
  height: 22px;
  flex-shrink: 0;
}


.skill-name {
  font-size: 0.85rem;
  line-height: 1.2;
}

/* Large skills */
.skill-large {
  padding: 1rem;
  font-size: 1.1rem;
}

.skill-large .skill-icon {
  width: 32px;
  height: 32px;
}

.skill-large .skill-name {
  font-size: 1.1rem;
  font-weight: 500;
}

/* Medium skills */
.skill-medium {
  padding: 0.8rem;
  font-size: 0.95rem;
}

.skill-medium .skill-icon {
  width: 26px;
  height: 26px;
}

.skill-medium .skill-name {
  font-size: 0.95rem;
  font-weight: 500;
}

/* Small-medium skills */
.skill-small-medium {
  padding: 0.7rem;
  font-size: 0.9rem;
}

.skill-small-medium .skill-icon {
  width: 24px;
  height: 24px;
}

.skill-small-medium .skill-name {
  font-size: 0.9rem;
  font-weight: 500;
}

/* Small skills */
.skill-small {
  padding: 0.6rem;
  font-size: 0.8rem;
}

.skill-small .skill-icon {
  width: 20px;
  height: 20px;
}

.skill-small .skill-name {
  font-size: 0.8rem;
  font-weight: 400;
}

/* Responsive Design */
@media (max-width: 768px) {
  .tag-cloud-wrapper {
    padding: 1.5rem 1rem;
    margin: 0 1rem;
  }
  
  .tag-cloud {
    gap: 0.8rem;
  }
}

@media (max-width: 480px) {
  .skills-container {
    margin-left: 0;
    padding: 0.5rem;
  }
  
  .tag-cloud-wrapper {
    padding: 1rem 0.5rem;
  }
  
  .tag-cloud {
    gap: 0.6rem;
  }
}
</style>