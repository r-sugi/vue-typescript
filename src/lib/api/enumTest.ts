const Permission = {
  Read: "r",
  Write: "w"
} as const;

type Permission = typeof Permission[keyof typeof Permission];

const permission: Permission = "r";
console.log(permission);
