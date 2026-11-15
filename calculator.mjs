export function estimate(cameras, mbps, days, duty, reserve) {
  if (!Number.isInteger(cameras) || cameras < 1 || cameras > 512 ||
      !Number.isFinite(mbps) || mbps <= 0 || mbps > 1000 ||
      !Number.isInteger(days) || days < 1 || days > 3650 ||
      !Number.isFinite(duty) || duty < 0 || duty > 100 ||
      !Number.isFinite(reserve) || reserve < 0 || reserve > 100) {
    throw new RangeError('Invalid recording inputs');
  }

  const daily = cameras * mbps * 86400 * duty / 800000;
  const total = daily * days;
  return { daily, total, planned: total + total * reserve / 100 };
}
