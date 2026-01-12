const VerticleLine = () => {
  return (
    <div className="w-4 md:w-6 lg:w-10">
      <div
        className="
          h-full w-full
          block
          border-x border-border/80
          bg-[repeating-linear-gradient(315deg,var(--border)_0,var(--border)_1px,transparent_0,transparent_50%)]
          bg-size-[6px_6px]
        "
      />
    </div>
  );
};

export { VerticleLine };
