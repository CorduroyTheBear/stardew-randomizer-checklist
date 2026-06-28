export function filterShipType(item, shipType)
{
    if (!item.shipType) return true;
    return item.shipType.some(type => shipType[type]);
}