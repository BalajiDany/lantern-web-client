import { SupportedLocationEntity } from 'src/app/entity/supported-location-entity';

export class SupportedLocationConstant {

    public static SUPPORTED_LOCATIONS: SupportedLocationEntity[] = [
        { locationId: 'BR', locationName: 'Brazil' },
        { locationId: 'CN', locationName: 'China' },
        { locationId: 'FR', locationName: 'France' },
        { locationId: 'DE', locationName: 'Germany' },
        { locationId: 'IN', locationName: 'India' },
        { locationId: 'IT', locationName: 'Italy' },
        { locationId: 'JP', locationName: 'Japan' },
        { locationId: 'KR', locationName: 'South Korea' },
        { locationId: 'GB', locationName: 'United Kingdom' },
        { locationId: 'US', locationName: 'United States' },
    ];

    public static DEFAULT_SUPPORTED_LOCATION = SupportedLocationConstant.SUPPORTED_LOCATIONS
        .find(location => location.locationId === 'IN');

    public static getLocationById = (locationId: string): SupportedLocationEntity => {
        return SupportedLocationConstant.SUPPORTED_LOCATIONS
            .find(location => location.locationId === locationId)
            || SupportedLocationConstant.DEFAULT_SUPPORTED_LOCATION;
    }
}
