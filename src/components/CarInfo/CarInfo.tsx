import { AppRouter } from '../../router/Router';
import { Dashboard } from '../dashboard/dashboard';
export function CarInfo() {
    return (
        <main>
            <div>
                <Dashboard  />
                <AppRouter/>                
            </div>
        </main>

    );
}