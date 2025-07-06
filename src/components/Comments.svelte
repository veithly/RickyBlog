<script lang="ts">
  import Giscus from '@giscus/svelte';
  import { onMount } from 'svelte';
  import { commentsConfig } from '../config/comments';

  export let title: string = '';
  export let url: string = '';

  let mounted = false;
  let theme = 'light';

  // Only show comments if enabled and properly configured
  $: showComments = commentsConfig.enable &&
                   commentsConfig.provider === 'giscus' &&
                   commentsConfig.giscus?.repo;

  onMount(() => {
    mounted = true;

    // Detect initial theme
    const isDark = document.documentElement.classList.contains('dark');
    theme = isDark ? 'dark' : 'light';

    // Listen for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          const isDark = document.documentElement.classList.contains('dark');
          theme = isDark ? 'dark' : 'light';
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => {
      observer.disconnect();
    };
  });
</script>

{#if mounted && showComments}
  <div class="comments-container glass-card p-6 mt-8">
    <div class="comments-header mb-6">
      <h3 class="text-xl font-semibold text-[var(--text-primary)] mb-2">
        💬 Comments
      </h3>
      <p class="text-sm text-[var(--text-secondary)]">
        Leave a comment below. You'll need a GitHub account to participate.
      </p>
    </div>

    <div class="giscus-wrapper">
      {#if commentsConfig.giscus}
        <Giscus
          id="comments"
          repo={commentsConfig.giscus.repo}
          repoId={commentsConfig.giscus.repoId || ''}
          category={commentsConfig.giscus.category}
          categoryId={commentsConfig.giscus.categoryId || ''}
          mapping={commentsConfig.giscus.mapping}
          term={title}
          reactionsEnabled={commentsConfig.giscus.reactionsEnabled}
          emitMetadata={commentsConfig.giscus.emitMetadata}
          inputPosition={commentsConfig.giscus.inputPosition}
          {theme}
          lang={commentsConfig.giscus.lang}
          loading={commentsConfig.giscus.loading}
        />
      {/if}
    </div>
  </div>
{/if}

<style>
  .comments-container {
    animation: fadeInUp 0.6s ease-out;
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .giscus-wrapper :global(.giscus) {
    width: 100%;
  }

  .giscus-wrapper :global(.giscus-frame) {
    border: none;
    border-radius: 0.75rem;
    background: transparent;
  }

  /* Enhanced styling for better integration */
  .comments-header h3 {
    background: linear-gradient(135deg, var(--primary), var(--primary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  @media (max-width: 768px) {
    .comments-container {
      margin: 1rem 0.5rem 0;
      padding: 1rem;
    }
  }
</style>
