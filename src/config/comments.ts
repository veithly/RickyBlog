export interface CommentsConfig {
  enable: boolean;
  provider: 'giscus' | 'utterances' | 'gitalk';
  giscus?: {
    repo: string;
    repoId: string;
    category: string;
    categoryId: string;
    mapping: 'pathname' | 'url' | 'title' | 'og:title';
    reactionsEnabled: boolean;
    emitMetadata: boolean;
    inputPosition: 'top' | 'bottom';
    lang: string;
    loading: 'lazy' | 'eager';
  };
}

export const commentsConfig: CommentsConfig = {
  enable: true,
  provider: 'giscus',
  giscus: {
    repo: 'veithly/RickyBlog',
    repoId: 'R_kgDOOQAMCw', // To be filled after setting up GitHub Discussions
    category: 'Comments',
    categoryId: 'DIC_kwDOOQAMC84Csjty', // To be filled after setting up GitHub Discussions
    mapping: 'pathname',
    reactionsEnabled: true,
    emitMetadata: false,
    inputPosition: 'top',
    lang: 'en',
    loading: 'lazy'
  }
};
