import { SupportedLocationEntity } from 'src/app/entity/supported-location-entity';

export class SupportedLocationConstant {

    public static SUPPORTED_LOCATIONS: SupportedLocationEntity[] = [
        { locationId: 'US', locationName: 'United States' },
        { locationId: 'CN', locationName: 'China' },
        { locationId: 'JP', locationName: 'Japan' },
        { locationId: 'DE', locationName: 'Germany' },
        { locationId: 'IN', locationName: 'India' },
        { locationId: 'GB', locationName: 'United Kingdom' },
        { locationId: 'KR', locationName: 'South Korea' },
        { locationId: 'BR', locationName: 'Brazil' },
        { locationId: 'FR', locationName: 'France' },
        { locationId: 'IT', locationName: 'Italy' },
    ];

    public static DEFAULT_SUPPORTED_LOCATION = SupportedLocationConstant.SUPPORTED_LOCATIONS
        .find(location => location.locationId === 'IN');

    public static getLocationById = (locationId: string): SupportedLocationEntity => {
        return SupportedLocationConstant.SUPPORTED_LOCATIONS
            .find(location => location.locationId === locationId)
            || SupportedLocationConstant.DEFAULT_SUPPORTED_LOCATION;
    }
}
