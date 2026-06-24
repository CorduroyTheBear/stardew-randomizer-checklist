export function filterSecretType(item, secretType)
{
    if (!item.secretType) return true;
    return secretType[item.secretType];
}