# jest-decouverte

## Proriétés indispensable à connaitre par chatGPT

> Lorsqu'on utilise la bibliothèque de tests `expect`, il y a plusieurs propriétés clés à connaître pour effectuer des assertions et vérifications sur des valeurs. Voici quelques-unes des propriétés les plus utilisées avec `expect` :

1. `expect(value)`: C'est la fonction principale de `expect` qui prend une valeur et retourne un objet d'assertion pour effectuer des vérifications.

2. `expect(value).toBe(expected)`: Utilisée pour vérifier si `value` est strictement égal (`===`) à `expected`.

3. `expect(value).toEqual(expected)`: Utilisée pour vérifier si `value` est égal (`==`) à `expected`. Cette vérification est plus souple que `toBe` et peut être utilisée pour comparer des objets ou des tableaux.

4. `expect(value).not.toBe(expected)`: Utilisée pour vérifier si `value` n'est pas strictement égal à `expected`.

5. `expect(value).not.toEqual(expected)`: Utilisée pour vérifier si `value` n'est pas égal à `expected`.

6. `expect(value).toBeDefined()`: Utilisée pour vérifier si `value` est défini (non `undefined`).

7. `expect(value).toBeUndefined()`: Utilisée pour vérifier si `value` est `undefined`.

8. `expect(value).toBeNull()`: Utilisée pour vérifier si `value` est `null`.

9. `expect(value).toBeTruthy()`: Utilisée pour vérifier si `value` est évalué à `true` dans un contexte booléen.

10. `expect(value).toBeFalsy()`: Utilisée pour vérifier si `value` est évalué à `false` dans un contexte booléen.

11. `expect(value).toContain(expected)`: Utilisée pour vérifier si `value` contient `expected`. Cela peut être utilisé avec des chaînes de caractères ou des tableaux.

12. `expect(value).toBeGreaterThan(expected)`: Utilisée pour vérifier si `value` est strictement supérieur à `expected`.

13. `expect(value).toBeLessThan(expected)`: Utilisée pour vérifier si `value` est strictement inférieur à `expected`.

14. `expect(value).toHaveLength(expectedLength)`: Utilisée pour vérifier si `value` a une longueur égale à `expectedLength`. Cela peut être utilisé avec des chaînes de caractères ou des tableaux.

Ces sont quelques-unes des propriétés les plus couramment utilisées avec `expect`. Il existe également d'autres méthodes et options disponibles pour effectuer des assertions plus spécifiques. Il est recommandé de consulter la documentation de la bibliothèque de tests que vous utilisez pour obtenir des informations plus détaillées sur les fonctionnalités et les propriétés disponibles.
