-- ========================= Example 4 =========================
Write a select statement from the TAB_Reg table that selects firstname, lastname, optin and
email where optin equals 1 and order the results alphabetically:
-- ========================= Answer ============================
SELECT firstname,
    lastname,
    optin,
    email
  FROM TAB_Reg
  WHERE optin = 1
  ORDER BY ASC;
