const VerticleLine = () => {
  return (
    <div className="w-6 max-lg:w-0">
      <div
        className="
          h-full max-lg:hidden border-x border-gray-300
          bg-[repeating-linear-gradient(315deg,rgba(0,0,0,0.15)_0,rgba(0,0,0,0.15)_1px,transparent_0,transparent_50%)]
          bg-size-[5px_5px] lg:bg-size-[7px_7px]
        "
      />
    </div>
  );
};

export { VerticleLine };
