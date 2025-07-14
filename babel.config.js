module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    //plugins: ['nativewind/babel'],
    //네이티브 윈드 넣으면 오류나서 일단 주석처리
  };
};