<script lang="ts">
</script>

<div class="terminal">
  <div class="window-decoration">
    <div class="circles">
      <span class="circle red"></span>
      <span class="circle yellow"></span>
      <span class="circle green"></span>
    </div>
    <span class="title">Root Loops Terminal</span>
  </div>
  <div class="content">
    <p>
      <span class="green">loops@cereal-box</span><span class="normal">:</span><span class="blue"
        >/home/loops</span
      ><span class="normal">$</span>
      echo "Hello, World!"
    </p>
    <p>Hello, World!</p>
  </div>
</div>

<style>
  .terminal {
    font-family: monospace;
    font-size: 1rem;
    color: var(--root-loops-foreground);
    position: relative;
    display: flex;
    flex-direction: column;
    box-shadow: 0 4px 12px #0001;
    border-radius: 1rem;
    border: 1px solid var(--color-slate-300);
    overflow: hidden;
  }

  .window-decoration {
    background: var(--color-slate-200);
    color: var(--color-slate-500);
    padding: 0.75rem 0.5rem;
    border-radius: 1rem 1rem 0 0;
    border: 1px solid var(--color-slate-100);
    border-bottom: 1px solid var(--color-slate-300);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .circles {
    position: absolute;
    left: 1rem;
    display: flex;
    gap: 0.75rem;
  }

  .circle {
    height: 16px;
    width: 16px;
    border-radius: 50%;
    display: block;
    background: var(--circle-color);

    &.red {
      --circle-color: var(--root-loops-ansi-red);
    }

    &.yellow {
      --circle-color: var(--root-loops-ansi-yellow);
    }

    &.green {
      --circle-color: var(--root-loops-ansi-green);
    }
  }

  .content {
    background: var(--root-loops-background);
    padding: 0 1rem;
    border-radius: 0 0 1rem 1rem;
  }

  .blue {
    color: var(--root-loops-ansi-blue);
  }

  .green {
    color: var(--root-loops-ansi-green);
  }

  .normal {
    color: var(--root-loops-foreground);
  }
</style>
